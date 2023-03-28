import Image from 'next/image';
// assets
import AscentPicture from '../../../public/assets/Ascent.png';
import FracturePicture from '../../../public/assets/Fracture.png';
import HavenPicture from '../../../public/assets/Haven.png';
import IceboxPicture from '../../../public/assets/Icebox.png';
import LotusPicture from '../../../public/assets/Lotus.png';
import PearlPicture from '../../../public/assets/Fracture.png';

const MapImage = ({ selectedMap }) => {
  return (
    <div>
      {selectedMap === 'Ascent' && AscentPicture && (
        <Image src={AscentPicture} alt="Image of Ascent Map" width={500} />
      )}
      {selectedMap === 'Bind' && BindPicture && (
        <Image src={BindPicture} alt="Image of Bind Map" width={500} />
      )}
      {selectedMap === 'Pearl' && PearlPicture && (
        <Image src={PearlPicture} alt="Image of Pearl Map" width={500} />
      )}
      {selectedMap === 'Haven' && HavenPicture && (
        <Image src={HavenPicture} alt="Image of Haven Map" width={500} />
      )}
      {selectedMap === 'Lotus' && LotusPicture && (
        <Image src={LotusPicture} alt="Image of Lotus Map" width={500} />
      )}
      {selectedMap === 'Icebox' && IceboxPicture && (
        <Image src={IceboxPicture} alt="Image of Icebox Map" width={500} />
      )}
      {selectedMap === 'Fracture' && FracturePicture && (
        <Image src={FracturePicture} alt="Image of Fracture Map" width={500} />
      )}
    </div>
  );
};

export default MapImage;
