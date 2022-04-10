import {useState, useEffect} from 'react';

const useFirebase = () => {
    const [user, setUser] = useState({});

    useEffect(() => {

    }, [])

    const singWithGoogle = () =>{
        console.log('sign in soon ');
    }

    return [ user, setUser]

}