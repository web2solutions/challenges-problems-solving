import {
  render,
  fireEvent,
  waitFor,
  screen
} from '@testing-library/react'
import App from './App';

const setup = () => {
  const utils = render( < App / > );
  const input = utils.getByLabelText('number-input');
  return {
    input,
    ...utils,
  }
};

test('1 -> 0', async () => {
  const {
    input
  } = setup();
  fireEvent.change(input, {
    target: {
      value: '1'
    }
  });
  await waitFor(() =>
    expect(screen.getByLabelText('result-info')).toHaveTextContent('0')
  );
});

test('2 -> 1', async () => {
  const {
    input
  } = setup();
  fireEvent.change(input, {
    target: {
      value: '2'
    }
  });
  await waitFor(() =>
    expect(screen.getByLabelText('result-info')).toHaveTextContent('1')
  );
});

test('3 -> 1', async () => {
  const {
    input
  } = setup();
  fireEvent.change(input, {
    target: {
      value: '3'
    }
  });
  await waitFor(() =>
    expect(screen.getByLabelText('result-info')).toHaveTextContent('1')
  );
});

test('4 -> 2', async () => {
  const {
    input
  } = setup();
  fireEvent.change(input, {
    target: {
      value: '4'
    }
  });
  await waitFor(() =>
    expect(screen.getByLabelText('result-info')).toHaveTextContent('2')
  );
});

test('5 -> 3', async () => {
  const {
    input
  } = setup();
  fireEvent.change(input, {
    target: {
      value: '5'
    }
  });
  await waitFor(() =>
    expect(screen.getByLabelText('result-info')).toHaveTextContent('3')
  );
});


test('6 -> 5', async () => {
  const {
    input
  } = setup();
  fireEvent.change(input, {
    target: {
      value: '6'
    }
  });
  await waitFor(() =>
    expect(screen.getByLabelText('result-info')).toHaveTextContent('5')
  );
});

test('7 -> 8', async () => {
  const {
    input
  } = setup();
  fireEvent.change(input, {
    target: {
      value: '7'
    }
  });
  await waitFor(() =>
    expect(screen.getByLabelText('result-info')).toHaveTextContent('8')
  );
});
