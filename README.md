# React with AWS Lambda - Word Counter App 🌍

## Introduction 🌟
Welcome to the **Word Counter App**, a simple demonstration of integrating React with AWS Lambda.

## Features 🚀
- React Frontend: Interactive UI built with React.
- AWS Lambda Backend: Serverless backend logic.
- Easy Deployment: Simplified setup with the serverless framework.

## Getting Started 🛠️
Set up the app in your local environment with these steps.

### Prerequisites
- Node.js and npm
- AWS account
- Serverless framework

### AWS Configuration
Ensure your AWS user has the following policies attached for proper functioning:

```json
{

	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": [
				"lambda:*",
				"iam:*",
				"s3:*",
				"logs:CreateLogGroup",
				"logs:CreateLogStream",
				"logs:PutLogEvents",
				"cloudformation:*",
				"apigateway:*"
			],
			"Resource": "*"
		}
	]
}

### Installation

1. **Clone the repo**:
   ```bash
   git clone https://github.com/rprotsyk/word-counter.git

### Install Dependencies

- **Frontend**:
  ```bash
  cd word-counter/frontend
  npm install

- **Lambda**:
  ```bash
  cd ../lambda
  npm install

## Configuration

1. Set up AWS credentials.
2. Run aws configure on your machine.

## Deployment

Deploy with:

**Lambda:**

```bash
npm run deploy-lambda

## React Deployment

To deploy the React app, run the following command:

```bash
npm run deploy-react

## Usage 🖥️

Access the app through the URL provided after deployment.

## Contributing 🤝

Feel free to contribute to this project. Contributions are what make the open-source community such an amazing place to learn, inspire, and create.

## Issues 🐛

Report issues [here](link-to-issues-page).

👤 Author

[@rprotsyk](https://github.com/rprotsyk)

Enjoy! 🎉