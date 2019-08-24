
import {useState,useEffect} from 'react'
import axios from 'axios'

function useOurTextField(props){

	const [val,setVal] = useState(props.value)
	const [person,setPerson] = useState(null)

	function onChange(event){
		const val = event.target.value

		if(props.maxLength != null && val.length>props.maxLength)
			setVal(pevVal=> pevVal)
		else	
			setVal(prevVal => val)		
	}

	useEffect(async () => {
		//document.title=val
		console.log('useEffect before--> async')
		const response = await axios.get("https://api.randomuser.me/")
		const data = await response.json()
		const [item] = data.results
		setPerson(item)
		console.log('useEffect after--> async')

	},[]);

	return [val,onChange,person]
}

export default useOurTextField
