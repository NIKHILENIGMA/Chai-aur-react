import conf from "../conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) //API Endpoint
      .setProject(conf.appwriteProjectId); //Project ID

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featureImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId, //* DATABASE_ID
        conf.appwriteCollectionId, //* COLLECTION_ID
        slug, //* We can use any unique ID
        {
          title,
          content,
          featureImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log(`Error occur at createPost method:: Error:${error}`);
    }
  }

  async updatePost(slug, { title, content, featureImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId, //* Database Id
        conf.appwriteCollectionId, //* Collection Id
        slug, //* Unique Id
        {
          title,
          content,
          featureImage,
          status,
        }
      );
    } catch (error) {
      console.log(
        `Error occur at App-write service :: updatePost method:: Error:${error}`
      );
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId, //* Database Id
        conf.appwriteCollectionId, //* Collection Id
        slug //* Unique Id
      );
      return true;
    } catch (error) {
      console.log(
        `Error occur at App-write service :: deletePost method:: Error:${error}`
      );
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log(
        `Error occur at App-write service :: getPost method:: Error:${error}`
      );
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(
        `Error occur at App-write service :: getPosts method:: Error:${error}`
      );
      return false;
    }
  }

  //file upload services

  async uploadFile() {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(
        `Error occur at App-write service :: uploadFile method:: Error:${error}`
      );
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log(
        `Error occur at App-write service :: deleteFile method:: Error:${error}`
      );
      return false;
    }
  }

  async previewFile(fileId) {
    try {
      return await this.bucket.previewFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log(
        `Error occur at App-write service :: deleteFile method:: Error:${error}`
      );
      return false;
    }
  }
}

const service = new Service();

export default service;
