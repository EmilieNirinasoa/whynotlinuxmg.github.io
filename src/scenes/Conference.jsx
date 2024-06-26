import ButtonFill from "../components/ButtonFill"
import { conferenceImage } from '../utils'
import ListConference from "../components/ListConference"

const Conference = () => {
  return (
    <div className='pt-6 mt-6 '>
      <ButtonFill content="Conference"/>
      <h2 className='font-kontes text-[38px] md:text-[58px] text-white pb-[5rem] pl-3 md:pl-0'>Huit <span className='text-yellow' >conférences</span> passionnantes.</h2>
      <div className='flex items-center  flex-wrap justify-center relative'>
        {conferenceImage.map((item, index)=>(
          <ListConference {...item} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Conference