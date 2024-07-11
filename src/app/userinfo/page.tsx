"use client";
import { db } from "@/firebase";
import { UserButton, useUser } from "@clerk/nextjs";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState, useRef } from "react";

const Products = () => {
  const { user } = useUser();
  const [userDataAdded, setUserDataAdded] = useState(false);
  const userDataAddedRef = useRef(false);

  useEffect(() => {
    const addUserData = async (values:any) => {
      try {
        const usersCollection = collection(db, "users");
        const q = query(
          usersCollection,
          where("email", "==", values.primaryEmailAddress.emailAddress)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.size === 0) {
          // User does not exist, add to database
          const collectionName = collection(db, "users");
          await addDoc(collectionName, {
            id: values.id,
            name: values.username,
            email: values.primaryEmailAddress.emailAddress,
          });
          console.log("Document successfully added!");
        } else {
          console.log("User already exists in database.");
        }

        // Update state to prevent duplicate addition
        setUserDataAdded(true);
        userDataAddedRef.current = true;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    // Ensure user is defined and userDataAddedRef is false before adding data
    if (user && !userDataAddedRef.current) {
      addUserData(user).catch((error) => {
        console.error("Error adding user data:", error);
      });
    }
  }, [user, userDataAddedRef]);

  return <>{user && <UserButton />}</>;
};

export default Products;
