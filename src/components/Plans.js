import React, { useEffect, useState } from 'react'
import '../assests/css/plans.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import db from '../firebase'

function Plans() {

    const stateUser = useSelector(selectUser)

    const [products, setProducts] = useState([])
    const [user, setUser] = useState({})

    async function updatePlan(planID,dbUser){
        // db.collection('users').doc(dbUser[0])
        //     .get()
        //     .then((querySnapshot) => {
        //         querySnapshot.forEach(async (user) => {
        //             console.log(user.id, " => ", user.data())
        //             user.set({plan: planID})
        //         })
        //     })
        // const UserRef = db.collection('users').doc(dbUser[0])
        // console.log(UserRef);
        // const res = await UserRef.update({
        //     plan: planID
        // })
        // console.log('Plan Updated', res)

        db.collection('users')
            .where("email", '==', stateUser.email)
            .get()
            .then((querySnapshot) => {
                const DBUser = {};
                querySnapshot.forEach(async (userDoc) => {
                    DBUser[userDoc.id].plan = planID
                })
            })
        console.log(db.collection('users').doc(dbUser[0]).get())
        console.log("Updated User => ",Object.entries(user)[0][1])
    }

    function handleSubscribe(e){
        const planID = e.target.value
        const dbUser = Object.entries(user)[0]
        console.log(planID, dbUser)
        
        // window.open(products[planID].Payment_Link, '_blank')
        updatePlan(planID, dbUser)
        // setTimeout(updatePlan(planID, dbUser), 10000)
    }

    useEffect(() => {
        db.collection('products')
            .get()
            .then((querySnapshot) => {
                const products = {};
                querySnapshot.forEach(async (productDoc) => {
                    products[productDoc.id] = productDoc.data()
                })
                setProducts(products)
            })

        db.collection('users')
            .where("email", "==", stateUser.email)
            .get()
            .then((querySnapshot) => {
                const DBUser = {};
                querySnapshot.forEach(async (userDoc) => {
                    DBUser[userDoc.id] = userDoc.data()
                    // const planSnap = await userDoc.ref.collection('products').get()
                    // planSnap.docs.forEach((plan) => {
                    //     DBUser[userDoc.id].plan = {
                    //         planId: plan.id,
                    //         planData: plan.data() 
                    //     }
                    // })
                })
                setUser(DBUser)
            })
    }, [products,user,stateUser])

    // console.log(user, products)

    return (
        <div
            className='plans'
        >
            {Object.entries(products).sort().map(([productID, productData]) => {
                return (
                    <div
                        className='plan'
                        key={productID}
                    >
                        <div
                            className='plan_info'
                        >
                            <h5>{productData.Name}</h5>
                            <h6>{productData.Description}</h6>
                        </div>
                        <div
                            className='plan_cost'
                        >
                            <h5>₹{productData.Cost}</h5>

                            {Object.entries(user)[0][1].plan === productID.toString() ? (
                                <button
                                    className='plan_subscribed_button plan_sub_button'
                                >
                                    Current Plan
                                </button>
                            ) : (
                                <button
                                    className='plan_sub_button'
                                    value={productID}
                                    onClick={(e) => handleSubscribe(e)}
                                >
                                    Subscribe
                                </button>
                            )}

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Plans