import React, { useEffect, useState } from 'react';

import Commands from './Commands';
import Description from './Description';
import {
  Checkbox,
  Form,
  Fieldset,
  Label,
  Legend,
} from './Form.style';
import { Main } from './Common.style';
import {
  getNumericPermissions,
  getSymbolicPermissions,
} from '../utils';

const App = () => {
  const initialPermissions = {
    read: false,
    write: false,
    execute: false,
  };
  const [owner, setOwner] = useState({
    ...initialPermissions,
  });
  const [group, setGroup] = useState({
    ...initialPermissions,
  });
  const [others, setOthers] = useState({
    ...initialPermissions,
  });

  const [octalValue, setNumericValue] = useState(null);
  const [symbolicValue, setSymbolicValue] = useState(null);

  useEffect(() => {
    const numeric = getNumericPermissions({
      owner: owner,
      group: group,
      others: others,
    });
    const symbolic = getSymbolicPermissions({
      owner: owner,
      group: group,
      others: others,
    });

    setNumericValue(numeric);
    setSymbolicValue(symbolic);
  }, [group, others, owner]);

  return (
    <Main>
      <Description />
      <section>
        <Form>
          <Fieldset>
            <Legend>Owner</Legend>
            {Object.entries(owner).map(([key]) => (
              <Label key={key}>
                <Checkbox
                  checked={owner[key]}
                  onChange={() =>
                    setOwner({
                      ...owner,
                      [key]: !owner[key],
                    })
                  }
                />
                {key}
              </Label>
            ))}
          </Fieldset>
          <Fieldset>
            <Legend>Group</Legend>
            {Object.entries(group).map(([key]) => (
              <Label key={key}>
                <Checkbox
                  checked={group[key]}
                  onChange={() =>
                    setGroup({
                      ...group,
                      [key]: !group[key],
                    })
                  }
                />
                {key}
              </Label>
            ))}
          </Fieldset>
          <Fieldset>
            <Legend>Others</Legend>
            {Object.entries(others).map(([key]) => (
              <Label key={key}>
                <Checkbox
                  checked={others[key]}
                  onChange={() =>
                    setOthers({
                      ...others,
                      [key]: !others[key],
                    })
                  }
                />
                {key}
              </Label>
            ))}
          </Fieldset>
        </Form>
        <Commands octal={octalValue} symbolic={symbolicValue} />
      </section>
    </Main>
  );
};

export default App;
