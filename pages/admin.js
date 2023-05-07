import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import { db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const AdminPage = () => {
    const router = useRouter();
    const [buttonName, setButtonName] = useState('');
    const { name, email } = router.query;

    useEffect(() => {
        const buttonRef = doc(db, 'button', 'button');
    
        getDoc(buttonRef)
          .then((doc) => {
            if (doc.exists()) {
              setButtonName(doc.data().name);
                console.log('Button document data:', doc.data());
            } else {
              console.log('Button document not found!');
            }
          })
          .catch((error) => {
            console.error('Error fetching button data:', error);
          });
      }, []);

  
    useEffect(() => {
        if (buttonName) {
            const updateButton = async () => {
                try {
                    await setDoc(doc(db, 'button', 'button'), {
                        name: buttonName,
                        lastUpdate: email,
                        lastUpdateName: name
                    });
                } catch (error) {
                    console.log(error);
                }
            };
            updateButton();
        }
    }, [buttonName]);



    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image src={logo} alt="Logo" width={152} height={152} className="mx-auto" />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome, {name}!</h2>
                <p className="mt-2 text-center text-md text-gray-600">Your email is: {email}</p>
                <p className="mt-2 text-center text-md text-gray-600">You are now in the admin page.</p>
            </div>
            <div className="m-8">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="button">
                    Onboard Button
                </label>
                <input
                    className="border border-gray-400 p-2 w-full rounded-md text-gray-800"
                    id="button"
                    name="name"
                    type="text"
                    placeholder='Change Onboard Button'
                    value={buttonName}
                    onChange={(e) => setButtonName(e.target.value)}
                />
            </div>
        </div>

    );
};

export default AdminPage;
