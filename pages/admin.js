import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../public/logo.png';

const AdminPage = ( ) => {
    const router = useRouter();
    const { name, email } = router.query;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image src={logo} alt="Logo" width={152} height={152} className="mx-auto" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome, {name}!</h2>
                <p className="mt-2 text-center text-md text-gray-600">Your email is: {email}</p>
                <p className="mt-2 text-center text-md text-gray-600">You are now in the admin page.</p>
            </div>

        </div>

    );
};

export default AdminPage;
