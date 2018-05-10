export default function (values) {
  const errors = {}

  if (!values.title || values.title < 3) {
    errors.title = "Enter a title that is at least 3 characters!"
  }
  if (!values.categories) {
    errors.categories = "Enter some categories"
  }
  if (!values.content) {
    errors.content = "Enter some content please"
  }

  return errors
}