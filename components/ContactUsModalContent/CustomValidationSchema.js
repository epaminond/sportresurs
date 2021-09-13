import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .max(20, "Количество символов не должно превышать 20")
    .matches(
      /^[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ'][a-zA-Z-а-яА-ЯёЁЇїІіЄєҐґ' ]+[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ']?$/,
      "Пожалуйста, введите валидное имя"
    )
    .required("Поле обязательно к заполнению"),
  phone: Yup.string()
    .matches(
      /^\+?3?8?(0[5-9][0-9]\d{7})$/,
      "Пожалуйста, введите валидный номер"
    )
    .required("Поле обязательно к заполнению"),
  details: Yup.string().max(200, "Количество символов не должно превышать 200"),
});

export default validationSchema;