import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

const App = () => {
    const [useFormik, setUseFormik] = useState(false);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1>User Registration Form</h1>

            <div style={{ marginBottom: '20px' }}>
                <button onClick={() => setUseFormik(false)} style={{ marginRight: '10px' }}>
                    Use Controlled Components
                </button>
                <button onClick={() => setUseFormik(true)}>
                    Use Formik
                </button>
            </div>

            {useFormik ? <FormikForm /> : <RegistrationForm />}
        </div>
    );
};

export default App;
