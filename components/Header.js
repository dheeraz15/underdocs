import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut, useSession } from 'next-auth/client';

function Header() {
    const [session] = useSession()

    return (
        <header className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white'>
            <Button
                color='gray'
                buttonType='outline'
                rounded={true}
                iconOnly={true}
                ripple='dark'
                className='md:inline-flex h-20 w-20 border-0'>
                <Icon name='menu' size='3xl' />
            </Button>
            <Icon name='description' size='5xl' color='red' />
            <h1 className="md:inline-flex ml-2 text-gray-700 text-2xl">Docs</h1>

            <div className='mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within: text-gray-600 focus-within:shadow-md'>
                <Icon name='search' size='3xl' color='gray' />
                <input type='text' placeholder='Search' className='flex-grow px-5 text-sm bg-transparent outline-none' />
            </div>

            <Button
                color='gray'
                buttonType='outline'
                rounded={true}
                iconOnly={true}
                ripple='dark'
                className='md:inline-flex ml-5 md:ml-20 h-20 w-20 border-0'>
                <Icon name='apps' size='3xl' color='gray' />
            </Button>
            
            <div className="cursor-pointer hover:border-red-1000">
            <img 
                loading="lazy"
                onClick={signOut}
                className="cursor-ponter h-10 w-10 rounded-full ml-2"
                src={session?.user?.image}
                alt={session?.user?.name}
            />
            </div>
        </header>
    )
}

export default Header
