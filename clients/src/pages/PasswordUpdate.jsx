import { useState, React, useEffect } from "react";

import { useParams } from "react-router-dom"
import axios from "axios";

function Profile() {
    const { userId } = useParams();
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [serverError, setServerError] = useState(null);

    // Mettre à jour les champs de la page
    const onFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const Update = () => {
        const instance = axios.create({
            withCredentials: true
        });

        let body = {
            current_password: formData.current_password,
            new_password: formData.new_password
        };

        instance.put(`http://localhost:5000/users/update/update-password`, body)
        .then(function (res) {
            instance.post("http://localhost:5000/auth/logout").then(()=> window.location.href = "/Login")
        })
        .catch(function (error) {
            console.log(error)
        });
        // window.location.href = "/profile/update-password"
    }




    const validateEmail = (email) => {
        // Expression régulière simple pour une adresse email
        const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return String(email)
            .toLowerCase()
            .match(
                regExp
            );
    };

    const validatePassword = (pwd) => {
        
        // Expression régulière simple pour un mdp
        const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return String(pwd)
            .match(
                regExp
            );
    }
    const validatePasswordLength = (pwd) => {
        // Définissez la longueur minimale souhaitée pour le mot de passe
        const minLength = 8;
        // return pwd.trim().length >= minLength;
        return pwd && pwd.trim().length >= minLength;
    };
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const errors = {};
    
        if (!formData.current_password?.trim()) {
            errors.current_password = "Old Password is required.";
        } else {
            // Vérifier si le mot de passe actuel correspond au mot de passe de l'utilisateur
            try {
                const response = await axios.post("http://localhost:5000/auth/check-password", { current_password: formData.current_password });
    
                if (!response.data.correct) {
                    errors.current_password = "Incorrect current password.";
                }
            } catch (error) {
                console.error(error);
                // Gérer l'erreur, par exemple, en définissant un message d'erreur générique
                // setServerError("An error occurred while updating the password. Please try again");
                setServerError("Incorrect current password.");
            }
        }
    
    // Validation du nouveau mot de passe
    if (!formData.new_password?.trim()) {
        errors.new_password = "New password is required.";
    } else if (!validatePassword(formData.new_password?.trim())) {
        errors.new_password = "Incorrect password format.";
    }
        
        // if (formData.new_password !== formData.password_confirm)
        //     errors.password_confirm = "La confirmation du mot de passe ne correspond pas.";
              // Validation de la confirmation du mot de passe
        if (!formData.password_confirm?.trim()) {
            errors.password_confirm = "Password confirmation is required.";
        } else if (formData.new_password !== formData.password_confirm) {
            errors.password_confirm = "Password confirmation does not match.";
        }
        // if (!validatePasswordLength(formData.new_password)) {
        //         errors.new_password = "Le nouveau mot de passe est trop court. Il doit contenir au moins 8 caractères.";
        //     }
          // Validation de la longueur du nouveau mot de passe
          if (!validatePasswordLength(formData.new_password)) {
            errors.new_password = "New password is too short. It must be at least 8 characters.";
        }
        console.log("formData", formData);
        console.log("errors", errors);
    
        setFormErrors(errors);
     
    
        if (Object.keys(errors).length === 0) {
            try {
               Update();
            } catch (error) {
                // Gestion des erreurs côté client
                setServerError("An error occurred while updating the password. Please try again.");
                console.error(error);
            }
        }
    }
//     const onSubmit = (e) => {
//         e.preventDefault();
//         const errors = {}

//         if (!formData.current_password.trim())
//             errors.current_password = "Please provide your previous password"
//         else if (validatePassword(formData.current_password.trim()))
//             errors.current_password = "Password incorrect"

//         if (!formData.new_password.trim())
//             errors.new_password = "Please provide your new password"
//         else if (validatePassword(formData.new_password.trim()))
//             errors.new_password = "Password incorrect"
        
//         if (formData.password_confirm !== formData.password_confirm)
//             errors.password_confirm = "Password confirmation incorrect"
//             console.log("formData", formData);
//             console.log("errors", errors);
//         setFormErrors(errors);

//         // if (Object.keys(formErrors).length === 0)
//             // Update()
//     // }
//     if (Object.keys(errors).length === 0) {
//         try {
//          Update();
//         } catch (error) {
//             // Gestion des erreurs côté client
//             setServerError("Une erreur s'est produite lors de la mise à jour du mot de passe. Veuillez réessayer.");
//             console.error(error);
//         }
//     }
// }
    return (
        <>
            <div class="flex justify-left h-screen text-left bg-white">
                <div class="w-1/2 basis ">
                    <form class="bg-white rounded px-8 pb-8 mb-4 mx-auto pt-10" onSubmit={onSubmit}>
                        <h1 class="my-2 text-2xl font-bold text-blue-500">Update password</h1>
                        <div class="mb-3">
                            <label
                                class="block text-gray-700 text-sm mb-2"
                                for="password"
                            >
                                Current password
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                name="current_password"
                                type="password"
                                value={formData.current_password}
                                placeholder="current_password"
                                onChange={onFormChange}
                            ></input>
                            {formErrors.current_password && <span class="text-red-600"> {formErrors.current_password} </span>}
                        </div>
                        <div class="mb-3">
                            <label
                                class="block text-gray-700 text-sm  mb-2"
                                for="new_password"
                            >
                                New passsword
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="new_password"
                                name="new_password"
                                type="password"
                                value={formData.new_password}
                                placeholder="new_password"
                                onChange={onFormChange}
                            ></input>
                            {formErrors.new_password && <span class="text-red-600"> {formErrors.new_password} </span>}
                        </div>
                        <div class="mb-3">
                            <label
                                class="block text-gray-700 text-sm mb-2"
                                for="phone_number"
                            >
                                Confirm Password
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password_confirm"
                                name="password_confirm"
                                type="password"
                                value={formData.password_confirm}
                                placeholder="Confirm Password"
                                onChange={onFormChange}
                            ></input>
                            {formErrors.new_password && <span class="text-red-600"> {formErrors.new_password} </span>}
                        </div>
                        <div class="flex items-center justify-between">
                            <button
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Update password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Afficher les messages d'erreur du serveur */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', marginTop: '-500px' }}>
  {serverError && <span className="text-red-600">{serverError}</span>}
</div>
        </>

    );
}

export default Profile;
