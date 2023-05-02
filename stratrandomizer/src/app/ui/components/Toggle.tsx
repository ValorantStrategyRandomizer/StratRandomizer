import React, { useState } from "react";
import { Switch } from '@headlessui/react';

const Toggle: React.FC<{ state: boolean | undefined; setState: (theme: boolean) => void; }> = ({ state, setState }) => {
  return (
    <Switch
      checked={state}
      onChange={setState}
      className={`${
        state ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable Something</span>
      <span
        className={`${
          state ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
}

export default Toggle;