export default function ValidateForm (values) {
    let errors = {};


    if (!values.email) {
      errors.email = 'Wprowadź adres email.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Podany adres jest nieprawdłowy.';
    }
    if (!values.password) {
      errors.password = 'Wprowadź hasło.';
    } else if (values.password.length < 6) {
      errors.password = 'Hasło musi zawierać minimum 6 znaków.';
    }
  
    return errors;
}

