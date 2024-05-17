import Pingouin from '../assets/images/pin.png';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

function Questions() {
  return (
    <div className="text-center my-4">
      <h2 className="text-white text-lg foire">FOIRES AUX <span>QUESTIONS</span> </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="flex justify-center p-4 md:col-span-1">
          <img src={Pingouin} alt="" />
        </div>
        <div className="p-4  md:col-span-2 text-left">
          <div className="question font-bold flex items-center justify-between border-b border-white pb-4 mb-4">
            À qui s'adresse cet événement?
            <IoIosArrowDown className="text-2xl text-white" />
          </div>
          <div className="reponse mb-4"></div>

          <div className="question font-bold flex items-center justify-between border-b border-white pb-4 mb-4">
            Quand est-ce que cet événement aura lieu?
            <IoIosArrowDown className="text-2xl text-white" />
          </div>
          <div className="reponse mb-4"></div>

          <div className="question font-bold flex items-center justify-between border-b border-white pb-4 mb-4">
            Qui peut participer aux compétitions?
            <IoIosArrowDown className="text-2xl text-white" />
          </div>
          <div className="reponse mb-4"></div>

          <div className="question font-bold flex items-center justify-between border-b border-white pb-4 mb-4">
            Pour plus d'informations, qui puis-je contacter?
            <IoIosArrowDown className="text-2xl text-white" />
          </div>
          <div className="reponse mb-4"></div>

          <div className="question_last font-bold flex items-center justify-between pb-4 mb-4">
            Comment devenir sponsor?
            <IoIosArrowDown className="text-2xl text-white" />
          </div>
          <div className="reponse mb-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
