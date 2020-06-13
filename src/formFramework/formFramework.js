import is from 'is_js';

export function createControl(config, validation) {
  return {
    ...config,
    touched: false,
    validation,
    valid: validateControl(config.value, validation),
    errorMessage: errorMessage(config.value, validation, true),
  };
}

export function validateForm(formControls) {
  let isFormValid = true;

  for (let control in formControls) {
    if (formControls.hasOwnProperty(control)) {
      isFormValid = formControls[control].valid && isFormValid;
    }
  }

  return isFormValid;
}

export function validateControl(value, validation) {
  if (!validation) {
    return true;
  }

  let isValid = true;

  if (validation.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (validation.minLength) {
    isValid = value.length >= validation.minLength && isValid;
  }

  if (validation.url) {
    isValid = is.url(value) && isValid;
  }

  return isValid;
}

export function errorMessage(value, validation, touched) {
  if (touched) {
    return '';
  }

  if (value.length === 0) {
    return 'Это обязательное поле';
  }

  if (value.length < validation.minLength) {
    return 'Должно быть от 2 до 30 символов';
  }

  if (!is.url(value)) {
    return 'Здесь должна быть ссылка';
  }

  return false;
}
