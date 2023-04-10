import Image from 'next/image';
// assets
import AscentAttack from '../../../public/assets/AscentAttack.png';
import AscentDefend from '../../../public/assets/AscentDefend.png';
import FractureAttack from '../../../public/assets/FractureAttack.png';
import FractureDefend from '../../../public/assets/FractureDefend.png';
import HavenAttack from '../../../public/assets/HavenAttack.png';
import HavenDefend from '../../../public/assets/HavenDefend.png';
import IceboxAttack from '../../../public/assets/IceboxAttack.png';
import IceboxDefend from '../../../public/assets/IceboxDefend.png';
import LotusAttack from '../../../public/assets/LotusAttack.png';
import LotusDefend from '../../../public/assets/LotusDefend.png';
import PearlAttack from '../../../public/assets/PearlAttack.png';
import PearlDefend from '../../../public/assets/PearlDefend.png';
import SplitAttack from '../../../public/assets/SplitAttack.png';
import SplitDefend from '../../../public/assets/SplitDefend.png';

const MapImage = ({ selectedMap, selectedPosition }) => {
  return (
    <div>
      {selectedMap === 'Ascent' &&
        selectedPosition === 'Attacking' &&
        AscentAttack && (
          <Image src={AscentAttack} alt="Image of Ascent Map" width={500} />
        )}
      {selectedMap === 'Ascent' &&
        selectedPosition === 'Defending' &&
        AscentDefend && (
          <Image src={AscentDefend} alt="Image of Ascent Map" width={500} />
        )}
      {/* {selectedMap === 'Bind' &&
        selectedPosition === 'Attacking' &&
        BindPicture && (
          <Image src={BindAttack} alt="Image of Bind Map" width={500} />
        )}
      {selectedMap === 'Bind' &&
        selectedPosition === 'Defending' &&
        BindPicture && (
          <Image src={BindDefend} alt="Image of Bind Map" width={500} />
        )} */}
      {selectedMap === 'Pearl' &&
        selectedPosition === 'Attacking' &&
        PearlAttack && (
          <Image src={PearlAttack} alt="Image of Pearl Map" width={500} />
        )}
      {selectedMap === 'Pearl' &&
        selectedPosition === 'Defending' &&
        PearlDefend && (
          <Image src={PearlDefend} alt="Image of Pearl Map" width={500} />
        )}
      {selectedMap === 'Haven' &&
        selectedPosition === 'Attacking' &&
        HavenAttack && (
          <Image src={HavenAttack} alt="Image of Haven Map" width={500} />
        )}
      {selectedMap === 'Haven' &&
        selectedPosition === 'Defending' &&
        HavenDefend && (
          <Image src={HavenDefend} alt="Image of Haven Map" width={500} />
        )}
      {selectedMap === 'Lotus' &&
        selectedPosition === 'Attacking' &&
        LotusAttack && (
          <Image src={LotusAttack} alt="Image of Lotus Map" width={500} />
        )}
      {selectedMap === 'Lotus' &&
        selectedPosition === 'Defending' &&
        LotusDefend && (
          <Image src={LotusDefend} alt="Image of Lotus Map" width={500} />
        )}
      {selectedMap === 'Icebox' &&
        selectedPosition === 'Attacking' &&
        IceboxAttack && (
          <Image src={IceboxAttack} alt="Image of Icebox Map" width={500} />
        )}
      {selectedMap === 'Icebox' &&
        selectedPosition === 'Defending' &&
        IceboxDefend && (
          <Image src={IceboxDefend} alt="Image of Icebox Map" width={500} />
        )}
      {selectedMap === 'Fracture' &&
        selectedPosition === 'Attacking' &&
        FractureAttack && (
          <Image src={FractureAttack} alt="Image of Fracture Map" width={500} />
        )}
      {selectedMap === 'Fracture' &&
        selectedPosition === 'Defending' &&
        FractureDefend && (
          <Image src={FractureDefend} alt="Image of Fracture Map" width={500} />
        )}
      {selectedMap === 'Split' &&
        selectedPosition === 'Attacking' &&
        SplitAttack && (
          <Image src={SplitAttack} alt="Image of Split Map" width={500} />
        )}
      {selectedMap === 'Split' &&
        selectedPosition === 'Defending' &&
        SplitDefend && (
          <Image src={SplitDefend} alt="Image of Split Map" width={500} />
        )}
    </div>
  );
};

export default MapImage;
