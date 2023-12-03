import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) //API Endpoint
      .setProject(conf.appwriteProjectId); //Project ID
  }

  //? We need to create a wraper so that in future if we change our backend service so we should not need to change our frontend

  // Create a async function which create account by taking credentials as email, password, and name
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      //$ Check if account is created or not
      if (userAccount) {
        //note Call another method: if user already have an existed account so we can redirect user to login page
        return this.login({ email, password });
      } else {
        //note If user had sign up then create user account
        return userAccount;
      }
    } catch (error) {
      console.log(
        `Error occur at App-write service :: createAccount method:: Error:${error}`
      );
    }
  }

  //Create a async function for Login
  async logIn({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log(
        `Error occur at App-write service :: logIn method:: Error:${error}`
      );
    }
  }

  //Create a async function which
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(
        `Error occur at App-write service :: getCurrentUser method:: Error:${error}`
        );
        
    }
    return null; //If there is no account exist
  }

  //Create a async function for logOut user
  async logOut() {
    try {
      await this.account.deleteSessions(); // This delete all the session of the user from multiple brower
    } catch (error) {
      console.log(
        `Error occur at App-write service :: logOut method:: Error:${error}`
      );
    }
  }
}
//@ Created a constructor function inside we create a object so anyone can use with '.' dot method

const authService = new AuthService();
export default authService;
