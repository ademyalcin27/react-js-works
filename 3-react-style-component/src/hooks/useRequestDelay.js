import { useState, useEffect } from "react";
export const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure'
}

function useRequestDelay(delayTime = 1000, initialData = []) {
    const [data, setData] = useState(initialData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)
    const [error, setError] = useState("");
  
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
    useEffect(() => {
      async function delayFunc() {
        try {
          await delay(delayTime);
          setRequestStatus(REQUEST_STATUS.SUCCESS)
          setData(data);
        } catch(e) {
          setRequestStatus(REQUEST_STATUS.FAILURE)
          setError(e)
        }
      }
      delayFunc();
    }, []);
  
   function updateRecord(record, doneCallback) { 
    const originalRecord = [...data];
    const newRecord = data.map( (rec) => {
      return rec.id === record.id ? record: rec;
    });
    async function delayFunction() {
      try {
        setData(newRecord);
        await delay(delayTime);
        if(doneCallback) {
          doneCallback()
        }
      }catch(error) {
        console.log('error throw inside delayFunction', error);
        if(doneCallback) {
          doneCallback();
        }
        setData(originalRecord)
      }
    }
    delayFunction()
   }
   function insertRecord(record, doneCallback) { 
    const originalRecord = [...data];
    const newRecord = [record, ...data]
    async function delayFunction() {
      try {
        setData(newRecord);
        await delay(delayTime);
        if(doneCallback) {
          doneCallback()
        }
      }catch(error) {
        console.log('error throw inside delayFunction', error);
        if(doneCallback) {
          doneCallback();
        }
        setData(originalRecord)
      }
    }
    delayFunction()
   }
   function deleteRecord(record, doneCallback) { 
    const originalRecord = [...data];
    const newRecord = data.filter((rec) => rec.id !== record.id)
    async function delayFunction() {
      try {
        setData(newRecord);
        await delay(delayTime);
        if(doneCallback) {
          doneCallback()
        }
      }catch(error) {
        console.log('error throw inside delayFunction', error);
        if(doneCallback) {
          doneCallback();
        }
        setData(originalRecord)
      }
    }
    delayFunction()
   }

    return {data, requestStatus, error, updateRecord, insertRecord, deleteRecord }
}

export default useRequestDelay;