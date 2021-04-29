import { Button } from '@modules/atoms/button';
import { InputComponent } from '@modules/atoms/inputs';
import { Typography } from '@modules/atoms/typography';
import { useForm } from 'hooks/useForm';
import { memo } from 'react';

const Component = () => {
  const { handleChange, handleSubmit, formValues } = useForm();

  const handleFormSubmit = e => {
    const data = handleSubmit(e);
  };

  return (
    <div className="flex flex-col ">
      <Typography variant="paragraph" color="white">
        Get notified when i drop off something new.
      </Typography>
      <div className="flex flex-col md:wflex-row space-x-0 md:space-x-3 space-y-2 md:space-y-0">
        <InputComponent
          placeholder="Enter your email"
          value={formValues['email']}
          onChange={handleChange}
          type="email"
          name="email"
          variant="primary"
        />
        <Button onClick={handleFormSubmit} variant="fill-primary">
          Join list
        </Button>
      </div>
    </div>
  );
};

export const EmailSubForm = memo(Component);
