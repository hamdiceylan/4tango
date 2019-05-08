import { FETCH_EVENT  } from './eventConstants'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../app/common/async/asyncActions'
import firebase from '../../app/config/firebase'

export const getEventsForDashboard = (lastEvent) => 
    async (dispatch, getState) => {
        let today = new Date(Date.now());
        const firestore = firebase.firestore();
        const eventsRef = firestore.collection('events');
        try{
            dispatch(asyncActionStart())
            let startAfter = 
                lastEvent && 
                    (await firestore
                        .collection('events')
                        .doc(lastEvent.id)
                        .get());
            let query;

            lastEvent 
                ? (query = eventsRef
                    .where('date','>=', today)
                    .orderBy('date')
                    .startAfter(startAfter)
                    .limit(2)) 
                : (query = eventsRef
                    .where('date','>=', today)
                    .orderBy('date')
                    .limit(2));

            let querySnap = await query.get();

            if(querySnap.docs.length === 0){
                dispatch(asyncActionFinish())
                return querySnap;
            }

            let events = [];
            
            for(let i=0; i < querySnap.docs.length; i++) {
                let evt = {...querySnap.docs[i].data(), id: querySnap.docs[i].id};
                events.push(evt);
            }
            console.log(events);
            dispatch({type: FETCH_EVENT,payload: {events}})
            dispatch(asyncActionFinish())
            return querySnap;

        } catch(error){
            dispatch(asyncActionError())
            console.log(error);
        }
    }
    