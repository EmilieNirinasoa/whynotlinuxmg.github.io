import Pingouin from '../assets/images/pin.png';

function Questions() {
  return (
    <div className="text-center my-4">
      <h2 className="text-white text-lg foire">FOIRES AUX <span>QUESTIONS</span> </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="flex justify-center p-4 md:col-span-1">
          <img src={Pingouin} alt="" />
        </div>
        <div className=" p-4 md:col-span-2 text-left">
          <div className="question font-bold">À qui s'adresse cet événement?</div>
          <div className="reponse mb-4"></div>
          <div className="question font-bold">Quand est-ce que cet événement aura lieu?</div>
          <div className="reponse mb-4"></div>
          <div className="question font-bold">Qui peut participer aux compétitions?</div>
          <div className="reponse mb-4"></div>
          <div className="question font-bold">Pour plus d'informations, qui puis-je contacter?</div>
          <div className="reponse mb-4"></div>
          <div className="question font-bold">Comment devenir sponsor?</div>
          <div className="reponse mb-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
