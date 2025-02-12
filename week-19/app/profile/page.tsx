import axios from 'axios'

async function Page(){
     const res = await axios.get('http://localhost:3000/api/profile', {
           headers:{
            authorization: localStorage.getItem('token')
           }
        })
        const profile = res.data.url
  return (
    <div>URL:{profile}</div>
  )
}

export default Page