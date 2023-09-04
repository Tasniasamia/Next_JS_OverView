"use client"
import React, { useState } from 'react';
import styles from '../../styles/outside.module.css'; // Adjust the path accordingly
import Image from 'next/image';

const Page = () => {
    const [styledata, setStyleData] = useState({ backgroundColor: "red" });

    return (
        <div>
            <div className={styles.inside}>Blog here</div>
            <Image src="https://img.freepik.com/free-photo/top-view-food-banquet_23-2149893441.jpg?w=1060&t=st=1693813771~exp=1693814371~hmac=bf41a6d73f7bbad8abd543aa7331939a3dd3f472807c9c63a0002117a208b9d4" height={200} width={150} alt="image"/>
            <button onClick={() => setStyleData({ backgroundColor: "pink" })}>Update Style</button>
        </div>
    );
};

export default Page;