import Image from 'next/image';
// assets
import AscentAttack from 'public/assets/AscentAttack.png';
import AscentDefense from 'public/assets/AscentDefense.png';
import BindAttack from "public/assets/BindAttack.png";
import BindDefense from "public/assets/BindDefense.png";
import BreezeAttack from "public/assets/BreezeAttack.png";
import BreezeDefense from "public/assets/BreezeDefense.png";
import FractureAttack from 'public/assets/FractureAttack.png';
import FractureDefense from 'public/assets/FractureDefense.png';
import HavenAttack from 'public/assets/HavenAttack.png';
import HavenDefense from 'public/assets/HavenDefense.png';
import IceboxAttack from 'public/assets/IceboxAttack.png';
import IceboxDefense from 'public/assets/IceboxDefense.png';
import LotusAttack from 'public/assets/LotusAttack.png';
import LotusDefense from 'public/assets/LotusDefense.png';
import PearlAttack from 'public/assets/PearlAttack.png';
import PearlDefense from 'public/assets/PearlDefense.png';
import SplitAttack from 'public/assets/SplitAttack.png';
import SplitDefense from 'public/assets/SplitDefense.png';

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
        AscentDefense && (
          <Image src={AscentDefense} alt="Image of Ascent Map" width={500} />
        )}
      {selectedMap === 'Bind' &&
        selectedPosition === 'Attacking' &&
        BindAttack && (
          <Image src={BindAttack} alt="Image of Bind Map" width={500} />
        )}
      {selectedMap === 'Bind' &&
        selectedPosition === 'Defending' &&
        BindDefense && (
          <Image src={BindDefense} alt="Image of Bind Map" width={500} />
        )}
      {selectedMap === 'Breeze' &&
        selectedPosition === 'Attacking' &&
        BreezeAttack && (
          <Image src={BreezeAttack} alt="Image of Breeze Map" width={500} />
        )}
      {selectedMap === 'Breeze' &&
        selectedPosition === 'Defending' &&
        BreezeDefense && (
          <Image src={BreezeDefense} alt="Image of Breeze Map" width={500} />
        )}
      {selectedMap === 'Pearl' &&
        selectedPosition === 'Attacking' &&
        PearlAttack && (
          <Image src={PearlAttack} alt="Image of Pearl Map" width={500} />
        )}
      {selectedMap === 'Pearl' &&
        selectedPosition === 'Defending' &&
        PearlDefense&& (
          <Image src={PearlDefense} alt="Image of Pearl Map" width={500} />
        )}
      {selectedMap === 'Haven' &&
        selectedPosition === 'Attacking' &&
        HavenAttack && (
          <Image src={HavenAttack} alt="Image of Haven Map" width={500} />
        )}
      {selectedMap === 'Haven' &&
        selectedPosition === 'Defending' &&
        HavenDefense&& (
          <Image src={HavenDefense} alt="Image of Haven Map" width={500} />
        )}
      {selectedMap === 'Lotus' &&
        selectedPosition === 'Attacking' &&
        LotusAttack && (
          <Image src={LotusAttack} alt="Image of Lotus Map" width={500} />
        )}
      {selectedMap === 'Lotus' &&
        selectedPosition === 'Defending' &&
        LotusDefense&& (
          <Image src={LotusDefense} alt="Image of Lotus Map" width={500} />
        )}
      {selectedMap === 'Icebox' &&
        selectedPosition === 'Attacking' &&
        IceboxAttack && (
          <Image src={IceboxAttack} alt="Image of Icebox Map" width={500} />
        )}
      {selectedMap === 'Icebox' &&
        selectedPosition === 'Defending' &&
        IceboxDefense&& (
          <Image src={IceboxDefense} alt="Image of Icebox Map" width={500} />
        )}
      {selectedMap === 'Fracture' &&
        selectedPosition === 'Attacking' &&
        FractureAttack && (
          <Image src={FractureAttack} alt="Image of Fracture Map" width={500} />
        )}
      {selectedMap === 'Fracture' &&
        selectedPosition === 'Defending' &&
        FractureDefense&& (
          <Image src={FractureDefense} alt="Image of Fracture Map" width={500} />
        )}
      {selectedMap === 'Split' &&
        selectedPosition === 'Attacking' &&
        SplitAttack && (
          <Image src={SplitAttack} alt="Image of Split Map" width={500} />
        )}
      {selectedMap === 'Split' &&
        selectedPosition === 'Defending' &&
        SplitDefense&& (
          <Image src={SplitDefense} alt="Image of Split Map" width={500} />
        )}
    </div>
  );
};

export default MapImage;
