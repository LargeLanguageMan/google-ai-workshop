# Creating a Search Agent in Google Cloud Platform (GCP)

## Prerequisites
- A Google Cloud Platform account
- Access to the Google Cloud Console (console.cloud.google.com)

## Step 1: Enable Required APIs
1. Navigate to "APIs & Services" > "Library"
2. Search for and enable:
   - Enterprise Search API
   - Vertex AI API
   - Discovery Engine API

## Step 2: Access Agent Builder
- From the navigation menu, go to "Artificial Intelligence"
- Select "Agent Builder"
- Click "Continue" and activate the API if prompted

## Step 3: Create Your Search App
1. Click "Create App"
2. Select "Search" as the app type
3. Enter your app name and company name
4. Click "Continue"

## Step 4: Choose Your Data Source Type
You can create three types of search applications:

### A. Website Search
- Select "Website Content" as data source
- Enter the websites you want to index (e.g., cloud.google.com/*)
- Configure your data store name

### B. Structured Data Search
- Select "Cloud Storage" as data source
- Choose "Structured data (JSONL)" format
- Upload your data file or specify Cloud Storage path
- Configure schema and key properties

### C. Unstructured Data Search
- Select "Cloud Storage" as data source
- Choose "Unstructured documents" format
- Upload your documents (supports PDFs and other document types)

## Step 5: Configure Search Results
- Go to "Configurations" in the side panel
- Customize display fields (Title, Thumbnail, URL, etc.)
- Save and publish your changes

## Step 6: Test Your Search Agent
- Use the Preview panel to test different search queries
- Switch between mobile and desktop views
- Verify the relevance of search results

## Step 7: Integration
- Access the Integration panel for implementation options
- Choose between:
  - Web widget (copy/paste HTML snippet)
  - API integration
- Configure authentication (JWT, OAuth, or Public Access)
- Set allowed domains if needed

## Step 8: Deploy
- Once satisfied with testing, deploy your agent
- Monitor performance through Analytics
- Get API credentials for application integration

Note: Processing times may vary depending on the data source type and volume. Structured and unstructured data indexing might take several minutes to complete.
