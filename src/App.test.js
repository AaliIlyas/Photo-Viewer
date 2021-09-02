import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import ImageUrls from './photoViewer/imageSelector';
import renderer from 'react-test-renderer';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

test('check 1st image url is correct', () => {
	render(<App />);
	const image = screen.getByTestId("main-img");

	expect(image).toHaveAttribute('src', ImageUrls[0])
});

//A ‘Regression / Snapshot' test to confirm that the ‘ImageViewer' component doesn’t accidentally change in the future.

describe("Snapshot testing:", () => {
	it('site renders correctly', () => {
		const app = renderer.create(<App />).toJSON();

		expect(app).toMatchSnapshot();
	});
});


test('site renders 44 thumbnail images', () => {
	render(<App />);
	const images = screen.getAllByRole("thumbnail");
	expect(images).toHaveLength(44);

})

test('check that thumbnail correctly updates main image', () => {
	render(<App />);
	const image = screen.getByTestId("main-img");

	userEvent.click(screen.getByTestId('3'));

	expect(image).toHaveAttribute('src', ImageUrls[3]);

});
