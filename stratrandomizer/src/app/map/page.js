'use client';
// next stuff
// packages
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
// Components
import MapImage from './MapImage';

const MapPool = ['Ascent', 'Fracture', 'Haven', 'Icebox', 'Lotus', 'Pearl'];
const Positions = ['Attacking', 'Defending'];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Map() {
  const [selectedMap, setSelectedMap] = useState('Ascent');
  const [selectedPosition, setSelectedPosition] = useState('Atacking');

  const handleSelectMap = (e) => {
    setSelectedMap(e);
  };
  const handleSelectPosition = (e) => {
    setSelectedPosition(e);
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
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
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
            <div>
              <Listbox value={selectedMap} onChange={handleSelectMap}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                      Select Map
                    </Listbox.Label>
                    <div className="relative mt-2">
                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                        <span className="flex items-center">
                          <span className="ml-3 block truncate">
                            {selectedMap}
                          </span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {MapPool.map((mapName, index) => (
                            <Listbox.Option
                              key={`${mapName}-${index}`}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-gray-900',
                                  'relative cursor-default select-none py-2 pl-3 pr-9'
                                )
                              }
                              value={mapName}
                            >
                              {({ selected, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <span
                                      className={classNames(
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'ml-3 block truncate'
                                      )}
                                    >
                                      {mapName}
                                    </span>
                                  </div>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? 'text-white'
                                          : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
              }}
            >
              <Listbox value={selectedPosition} onChange={handleSelectPosition}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                      Select Position
                    </Listbox.Label>
                    <div className="relative mt-2">
                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                        <span className="flex items-center">
                          <span className="ml-3 block truncate">
                            {selectedPosition}
                          </span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {Positions.map((pos, index) => (
                            <Listbox.Option
                              key={`${pos}-${index}`}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-gray-900',
                                  'relative cursor-default select-none py-2 pl-3 pr-9'
                                )
                              }
                              value={pos}
                            >
                              {({ selected, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <span
                                      className={classNames(
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'ml-3 block truncate'
                                      )}
                                    >
                                      {pos}
                                    </span>
                                  </div>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? 'text-white'
                                          : 'text-indigo-600',
                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
              }}
            >
              <button
                type="submit"
                onClick={handleClick}
                className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <MapImage selectedMap={selectedMap} />
      </div>
    </div>
  );
}