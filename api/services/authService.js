export const createUser = async ({ phone, password, name }) => {
  try {
    // Call DB
    // return user
    return `Calling DB: Create User in a DB: ${name}, ${phone}, ${password}`
  } catch (error) {
    return error
  }
}
