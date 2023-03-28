'use client';
// next stuff
import Image from 'next/image';
// packages
import { useState } from 'react';
// assets
import AscentPicture from '../../../public/assets/Ascent.png';
import FracturePicture from '../../../public/assets/Fracture.png';
import HavenPicture from '../../../public/assets/Haven.png';
import IceboxPicture from '../../../public/assets/Icebox.png';
import LotusPicture from '../../../public/assets/Lotus.png';
import PearlPicture from '../../../public/assets/Fracture.png';

export default function Map() {
  const [selectedMap, setSelectedMap] = useState('Ascent');

  const handleSelectMap = (e) => {
    console.log(`im the e`, e);
    setSelectedMap(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          width: '30vw',
          padding: '20px',
        }}
      >
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <label htmlFor="maps">Choose a Map:</label>
            <select
              name="maps"
              id="maps"
              value={selectedMap}
              onChange={handleSelectMap}
            >
              <option value="Ascent">Ascent</option>
              <option value="Bind">Bind</option>
              <option value="Breeze">Breeze</option>
              <option value="Fracture">Fracture</option>
              <option value="Haven">Haven</option>
              <option value="Icebox">Icebox</option>
              <option value="Lotus">Lotus</option>
              <option value="Pearl">Pearl</option>
              <option value="Split">Split</option>
            </select>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '20px',
            }}
          >
            <label htmlFor="defense">Choose your side:</label>
            <select name="defense" id="defense" form="">
              <option value="Attack">Attack</option>
              <option value="Defense">Defense</option>
            </select>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '20px',
            }}
          >
            <button type="submit" onClick={handleClick}>
              Go
            </button>
          </div>
        </form>
      </div>
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
          <Image
            src={FracturePicture}
            alt="Image of Fracture Map"
            width={500}
          />
        )}
      </div>
    </div>
  );
}
