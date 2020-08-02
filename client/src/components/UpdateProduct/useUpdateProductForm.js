import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SnackContext } from '../SnackBar/SnackContext';
import { postEndPoint } from '../UtilityFunctions/Request';

// custom hook for form state management
const useForm = ({ name, sellingPrice, loose, id, upperLimit, lowerLimit }) => {
  // function to validate inputs, returns the error statements
  const validateInputs = values => {
    const err = {
      errors: false,
      name: ' ',
      sellingPrice: ' ',
      loose: ' ',
      upperLimit: ' ',
      lowerLimit: ' ',
    };

    if (values.sellingPrice === '0') {
      err.sellingPrice = 'Selling Price cannot be 0';
      err.errors = true;
    }

    if (values.upperLimit === '0') {
      err.upperLimit = 'Upper Limit cannot be 0';
      err.errors = true;
    }

    if (values.lowerLimit === '0') {
      err.lowerLimit = 'Lower Limit cannot be 0';
      err.errors = true;
    }

    if (Number(values.upperLimit) <= Number(values.lowerLimit)) {
      err.upperLimit = 'Upper Limit cannot be lower or equal to Lower limit';
      err.errors = true;
    }

    if (Number(values.lowerLimit) >= Number(values.upperLimit)) {
      err.lowerLimit = 'Lower Limit cannot be lower or equal to Upper limit';
      err.errors = true;
    }

    Object.keys(values).forEach(key => {
      if (key !== 'upperLimit' || key !== 'lowerLimit') {
        if (values[key] === '') {
          err[key] = 'Please fill out this field';
          err.errors = true;
        }
      }
    });

    return err;
  };

  // values for name , selling price and loose
  // got from location state
  const [values, setValues] = useState({
    name,
    sellingPrice: sellingPrice || '',
    loose: loose === true ? 'true' : 'false',
    upperLimit,
    lowerLimit,
  });

  // error messages to be added to the inputs
  const [error, setError] = useState({
    errors: false,
    name: ' ',
    sellingPrice: ' ',
    loose: ' ',
    upperLimit: ' ',
    lowerLimit: ' ',
  });

  // true only if submit button is pressed
  const [isSubmitting, setIsSubmitting] = useState(false);
  // true when waiting for an response from API
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const { setSnack } = useContext(SnackContext);

  // function to post the credentials to the server, then user is redirected to employee page.
  //  if credentials are invalid then invalidcred is set to appropriate errors got from API
  const apiFetch = async formData => {
    try {
      setIsLoading(true);
      await postEndPoint(`/api/update/${id}/`, formData, null, history);
      setIsLoading(false);

      // add success snackbar on successful request
      setSnack({
        open: true,
        message: `Succesfully updated ${values.name}`,
        action: '',
        actionParams: '',
        type: 'success',
      });
      history.push('/inventory');
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    // only runs if there are no errors and submit button is pressed
    // isSubmitting is used to avoid running on initial render
    if (!error.errors && isSubmitting) {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('latest_selling_price', values.sellingPrice);
      const looseVal = values.loose === 'true' ? 'True' : 'False';
      formData.append('loose', looseVal);
      if (values.upperLimit !== '') {
        formData.append('upper', values.upperLimit);
      }
      if (values.lowerLimit !== '') {
        formData.append('lower', values.lowerLimit);
      }
      // post data to server
      apiFetch(formData);
      setIsSubmitting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isSubmitting]);

  // function to handle submit
  const handleSubmit = event => {
    if (event) event.preventDefault();
    setError(validateInputs(values));
    setIsSubmitting(true);
  };

  // function to handle any change in inputs
  const handleChange = event => {
    // Use event.persist() to stop event pooling done by react
    event.persist();
    setValues(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    error,
    values,
    isLoading,
  };
};

export default useForm;
