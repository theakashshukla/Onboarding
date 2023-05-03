import { useState } from 'react';
import Icon from '../utils/icon';
import { faUser, faUserAlt, faCreditCard, faCheck, faInfoCircle, faLock, faMinus, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { app } from '../firebase';
import { useRouter } from 'next/router';
import { getFirestore, addDoc, collection } from 'firebase/firestore';


const Onboarding = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [privacyPolicy, setPrivacyPolicy] = useState(false)
    const [currentStep, setCurrentStep] = useState(1)
    const router = useRouter();

    const db = getFirestore(app);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCollectionRef = collection(db, 'users');
            await addDoc(userCollectionRef, {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                privacyPolicy: privacyPolicy
            });
            // show submit id
            const docId = userCollectionRef.id;
            console.log('User added!: New document reference ID:', docId);
            router.push({
              pathname: '/admin',
              query: { name, email },
            });
        } catch (error) {
          console.error(error);
        }
    };
      


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     // handleNext()

    // }

    // const handleNext = () => {
    //     setCurrentStep(currentStep + 1)
    // }

    return (
            <>

                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <div className="max-w-md w-full py-7 px-7 bg-white shadow-lg rounded-lg">

                        <div className="flex items-center mb-6">
                            <div className="w-1/4 flex flex-col items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}>
                                    <Icon icon={faLock} />
                                </div>
                                <div className={`text-xs text-center mt-2 ${currentStep >= 1 ? 'text-gray-800' : 'text-gray-500'}`}>Account</div>
                            </div>
                            <div className={`h-0.5 w-full mb-5 ${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-300'}`} />
                            <div className="w-1/4 flex flex-col items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}>
                                    <Icon icon={faUserAlt} />
                                </div>
                                <div className={`text-xs text-center mt-2 ${currentStep >= 2 ? 'text-gray-800' : 'text-gray-500'}`}>Personal</div>
                            </div>
                            <div className={`h-0.5 w-full mb-5 ${currentStep >= 3 ? 'bg-blue-500' : 'bg-gray-300'}`} />
                            <div className="w-1/4 flex flex-col items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}>
                                    <Icon icon={faCreditCard} />
                                </div>
                                <div className={`text-xs text-center mt-2 ${currentStep >= 3 ? 'text-gray-800' : 'text-gray-500'}`}>Billing</div>
                            </div>
                            <div className={`h-0.5 w-full mb-5 ${currentStep >= 4 ? 'bg-blue-500' : 'bg-gray-300'}`} />
                            <div className="w-1/4 flex flex-col items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 4 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}>
                                    <Icon icon={faCheck} />
                                </div>
                                <div className={`text-xs text-center mt-2 ${currentStep >= 4 ? 'text-gray-800' : 'text-gray-500'}`}>Done</div>
                            </div>
                        </div>


                        {currentStep === 1 && (
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                                            Name*
                                        </label>
                                        <input
                                            className="border border-gray-400 p-2 w-full rounded-md text-gray-800"
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder='Bryan Koelpin'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                            Email*
                                        </label>
                                        <input
                                            className="border border-gray-400 p-2 w-full rounded-md text-gray-800"
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder='Email Address'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <p className="text-gray-500 text-sm mt-1">
                                            Please input a real Email Address
                                        </p>

                                    </div>
                                    <div className="flex flex-col md:flex-row mb-4">
                                        <div className="w-full md:w-1/2 md:mr-2">
                                            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                                                Password*
                                            </label>
                                            <input
                                                className="border border-gray-400 p-2 w-full rounded-md text-gray-800"
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder='Password'
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <p className="text-gray-500 text-sm mt-1">
                                                Please enter your password
                                            </p>
                                        </div>
                                        <div className="w-full md:w-1/2 md:ml-2">
                                            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
                                                Confirm Password*
                                            </label>
                                            <input
                                                className="border border-gray-400 p-2 w-full rounded-md text-gray-800"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type="password"
                                                placeholder='Confirm Password'
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                            <p className="text-gray-500 text-sm mt-1">
                                                Passwords need to match
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input
                                            className="mr-2"
                                            id="privacyPolicy"
                                            name="privacyPolicy"
                                            type="checkbox"
                                            checked={privacyPolicy}
                                            onChange={(e) => setPrivacyPolicy(e.target.checked)}
                                        />
                                        <label htmlFor="privacyPolicy" className="text-gray-700 font-medium">
                                            I accept the Terms and Privacy Policy
                                        </label>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                            Next
                                            <Icon icon={faAngleRight} className="ml-2" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* {currentStep === 2 && (

                            <div>
                                <h2 className="text-lg font-medium text-gray-900 mb-6">Personal Information</h2>
                                <form onSubmit={handleSubmit}>
                                </form>
                            </div>
                        )}
                        {currentStep === 3 && (

                            <div>
                                <h2 className="text-lg font-medium text-gray-900 mb-6">Personal Information</h2>
                                <form onSubmit={handleSubmit}>
                                </form>
                            </div>
                        )}
                        {currentStep === 4 && (

                            <div>
                                <h2 className="text-lg font-medium text-gray-900 mb-6">Personal Information</h2>
                                <form onSubmit={handleSubmit}>
                                </form>
                            </div>
                        )} */}

                    </div>
                </div>

            </>

        )
    }
    export default Onboarding

