import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Add from '../Add';
import TaskService from '../../services/tasks.services';

jest.mock('../../services/tasks.services');

describe('Add component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should render the Add component', () => {
    const { getByText } = render(<Add />);
    const header = getByText('Ajouter une nouvelle tâche');
    expect(header).toBeInTheDocument();
  });

  test('should call addTask method when the form is submitted', async () => {
    const { getByLabelText, getByText } = render(<Add />);
    const input = getByLabelText('Label');
    const checkbox = getByLabelText('Tâche effectuée');
    const button = getByText('Ajouter');
    const label = 'New task label';

    fireEvent.change(input, { target: { value: label } });
    fireEvent.click(checkbox);
    fireEvent.click(button);

    expect(TaskService.addTask).toHaveBeenCalledWith(label, true);
  });
});
