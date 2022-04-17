import React from "react";
import { Button, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center w-100"
    >
      <>
        <Button variant="light" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Please Wait...
        </Button>
      </>
    </div>
  );
};

export default Loading;
