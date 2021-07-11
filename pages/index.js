import Head from 'next/head'
import Header from '../components/Header'
import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import Icon from "@material-tailwind/react/Icon";
import Login from './../components/Login';
import { useSession, getSession } from "next-auth/client";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import firebase from 'firebase';
import { useState } from 'react';
import { db } from '../firebase';
import { useCollectionOnce } from "react-firebase-hooks/firestore"
import DocumentRow from './../components/DocumentRow';

export default function Home() {
  const [session] = useSession();
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState('');
  const [snapshot] = useCollectionOnce
    (db.collection('userDocs')
      .doc(session?.user.email)
      .collection('docs')
      .orderBy('timestamp', 'desc'))


  const createDocument = () => {
    if (!input) return;

    db.collection('userDocs')
      .doc(session.user.email)
      .collection('docs')
      .add({
        fileName: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    setInput(""); setShowModal(false)
  };

  if (!session) return <Login />;

  const modal = (
    <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>

      <ModalBody>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="outline-none w-full"
          placeholder="Enter name of document"
          onKeyDown={(e) => e.key === "Enter" && createDocument()} />
      </ModalBody>

      <ModalFooter>
        <Button
          color="red"
          buttonType="link"
          onClick={(e) => setShowModal(false)}
          ripple="dark">
          Cancel
        </Button>

        <Button color="red" onCLick={createDocument} ripple="light">
          Create
        </Button>
      </ModalFooter>

    </Modal>
  );

  return (
    <div>
      <Head>
        <title>underdocs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {modal}

      <section className='bg-[#F8F9FA] pb-10 px-10'>
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between py-6">
            <h2 className='text-gray-700'>Start a new document</h2>
            <Button
              color='gray'
              buttonType='outline'
              iconOnly={true}
              ripple='dark'
              className='border-0'>
              <Icon name='more_vert' size='1xl' />
            </Button>
          </div>

          <div>
            <div onClick={() => setShowModal(true)} className='relative h-52 w-40 border-2 cursor-pointer hover:border-red-300 rounded'>
              <Image src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png" layout="fill" />
            </div>

            <p className="ml- mt-2 text-sm text-gray-800">Blank</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>

          {snapshot?.docs.map(doc => (
            <DocumentRow
              key={doc.id}
              id={doc.id}
              fileName={doc.data().fileName}
              date={doc.data().timestamp}
            />
          ))}
        </div>
      </section>


    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}