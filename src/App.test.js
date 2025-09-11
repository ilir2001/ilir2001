import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Software Artisan portfolio', () => {
  render(<App />);
  const navLogoElement = screen.getByText('Software Artisan');
  expect(navLogoElement).toBeInTheDocument();
});

test('renders hero subtitle', () => {
  render(<App />);
  const subtitleElement = screen.getByText(/Crafting elegant digital solutions/i);
  expect(subtitleElement).toBeInTheDocument();
});

test('renders main sections', () => {
  render(<App />);
  const featuredProjectsHeading = screen.getByText(/Featured Projects/i);
  const technicalExpertiseHeading = screen.getByText(/Technical Expertise/i);
  const collaborateHeading = screen.getByText(/Let's Collaborate/i);
  
  expect(featuredProjectsHeading).toBeInTheDocument();
  expect(technicalExpertiseHeading).toBeInTheDocument();
  expect(collaborateHeading).toBeInTheDocument();
});
