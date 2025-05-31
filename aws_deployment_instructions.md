# AWS Deployment Instructions for ZETOS Hero App
**Purpose:** Complete step-by-step guide to deploy zetos_hero_app on AWS  
**Date:** May 31, 2025  
**Version:** 1.0  
**Domain:** www.adamchins.com

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Phase 1: AWS Amplify Deployment](#phase-1-aws-amplify-deployment)
3. [Phase 2: Custom Domain Setup](#phase-2-custom-domain-setup)
4. [Phase 3: Analytics & Monitoring](#phase-3-analytics--monitoring)
5. [Phase 4: Advanced CI/CD Pipeline](#phase-4-advanced-cicd-pipeline)
6. [Phase 5: User Behavior Tracking](#phase-5-user-behavior-tracking)
7. [Phase 6: Marketing Tools Setup](#phase-6-marketing-tools-setup)
8. [Cost Optimization](#cost-optimization)
9. [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Tools
- AWS Account (already created ✓)
- AWS CLI installed locally
- Git repository with your code
- Node.js and npm installed
- Your domain name (www.adamchins.com)

### Initial AWS Setup

1. **Configure AWS CLI** (if not already done):
```bash
aws configure
# Enter your AWS Access Key ID
# Enter your AWS Secret Access Key
# Default region: us-east-1 (or your preferred region)
# Default output format: json
```

2. **Create IAM User for Deployment** (Best Practice):
```bash
# In AWS Console: IAM → Users → Add User
# User name: zetos-hero-deployer
# Access type: Programmatic access
# Attach policies: 
#   - AmplifyFullAccess
#   - CloudWatchFullAccess
#   - Route53FullAccess
#   - CloudFrontFullAccess
```

## Phase 1: AWS Amplify Deployment

### Step 1: Prepare Your Repository

1. **Ensure your code is pushed to GitHub**:
```bash
cd /Users/yonghongqin/Documents/GitHub/zetos_hero_app/zetos_hero_app
git add .
git commit -m "Prepare for AWS deployment"
git push origin main  # or your branch name
```

2. **Verify build configuration**:
Create/update `amplify.yml` in your project root:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Step 2: Create Amplify App

1. **Navigate to AWS Amplify Console**:
   - AWS Management Console → Search "Amplify" → AWS Amplify

2. **Create New App**:
   - Click "Get Started" under "Host your web app"
   - Choose "GitHub" as your repository service
   - Click "Continue"

3. **Connect GitHub**:
   - Authorize AWS Amplify to access your GitHub
   - Select repository: `zetos_hero_app`
   - Select branch: `main` (or your preferred branch)
   - Click "Next"

4. **Configure Build Settings**:
   - App name: `zetos-hero-app`
   - Environment: `production`
   - Build settings should auto-detect from `amplify.yml`
   - Review the auto-detected settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: dist
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```
   - Click "Next"

5. **Review and Deploy**:
   - Review all settings
   - Click "Save and deploy"
   - Wait for initial deployment (5-10 minutes)

### Step 3: Verify Deployment

1. **Check Deployment Status**:
   - Green checkmark = Success
   - Note the Amplify app URL: `https://main.d1234567890.amplifyapp.com`

2. **Test the Application**:
   - Click on the provided URL
   - Verify all pages load correctly
   - Check console for any errors

## Phase 2: Custom Domain Setup

### Step 1: Set up Route 53 (if domain not in Route 53)

1. **Create Hosted Zone**:
   ```
   AWS Console → Route 53 → Hosted zones → Create hosted zone
   Domain name: adamchins.com
   Type: Public hosted zone
   ```

2. **Update Domain Nameservers**:
   - Copy the 4 nameservers from Route 53
   - Update at your domain registrar

### Step 2: Configure Domain in Amplify

1. **In Amplify Console**:
   - Select your app
   - Click "Domain management" in left sidebar
   - Click "Add domain"

2. **Add Domain**:
   - Domain: `adamchins.com`
   - Click "Configure domain"
   - Set up subdomains:
     - `www` → branch: main
     - `@` (root) → redirect to www
   - Click "Save"

3. **Wait for SSL Certificate**:
   - AWS creates SSL certificate automatically
   - This can take 15-30 minutes
   - Status will change to "Available"

## Phase 3: Analytics & Monitoring

### Step 1: Enable CloudWatch RUM (Real User Monitoring)

1. **Create RUM Application**:
```bash
# Using AWS CLI
aws rum create-app-monitor \
    --name "zetos-hero-app-rum" \
    --domain "www.adamchins.com" \
    --region us-east-1
```

2. **Get RUM Snippet**:
   - AWS Console → CloudWatch → RUM → Your app monitor
   - Copy the JavaScript snippet

3. **Add RUM to Your App**:
Update `index.html`:
```html
<head>
  <!-- Other head elements -->
  <script>
    (function(n,i,v,r,s,c,x,z){
      // RUM snippet code here
    })(window,AWS);
  </script>
</head>
```

4. **Commit and Push**:
```bash
git add index.html
git commit -m "Add CloudWatch RUM monitoring"
git push origin main
```

### Step 2: Set Up CloudWatch Dashboards

1. **Create Dashboard**:
```bash
aws cloudwatch put-dashboard \
    --dashboard-name "ZetosHeroAppDashboard" \
    --dashboard-body file://dashboard-config.json
```

2. **Create `dashboard-config.json`**:
```json
{
  "widgets": [
    {
      "type": "metric",
      "properties": {
        "metrics": [
          ["AWS/RUM", "PageLoad", {"stat": "Average"}],
          [".", "JSErrors", {"stat": "Sum"}],
          [".", "SessionCount", {"stat": "Sum"}]
        ],
        "period": 300,
        "stat": "Average",
        "region": "us-east-1",
        "title": "User Experience Metrics"
      }
    }
  ]
}
```

### Step 3: Set Up Alarms

```bash
# Page load time alarm
aws cloudwatch put-metric-alarm \
    --alarm-name "HighPageLoadTime" \
    --alarm-description "Alert when page load time exceeds 3 seconds" \
    --metric-name PageLoad \
    --namespace AWS/RUM \
    --statistic Average \
    --period 300 \
    --threshold 3000 \
    --comparison-operator GreaterThanThreshold \
    --evaluation-periods 2

# Error rate alarm
aws cloudwatch put-metric-alarm \
    --alarm-name "HighErrorRate" \
    --alarm-description "Alert when JS errors exceed 10 per hour" \
    --metric-name JSErrors \
    --namespace AWS/RUM \
    --statistic Sum \
    --period 3600 \
    --threshold 10 \
    --comparison-operator GreaterThanThreshold \
    --evaluation-periods 1
```

## Phase 4: Advanced CI/CD Pipeline

### Step 1: Create CodePipeline

1. **Create S3 Bucket for Artifacts**:
```bash
aws s3 mb s3://zetos-hero-app-artifacts-$(date +%s)
```

2. **Create CodeBuild Project**:
Create `buildspec.yml` in your repo:
```yaml
version: 0.2
phases:
  pre_build:
    commands:
      - echo Installing dependencies...
      - npm ci
  build:
    commands:
      - echo Building React application...
      - npm run build
      - echo Running tests...
      - npm test -- --coverage --watchAll=false
  post_build:
    commands:
      - echo Build completed on `date`
artifacts:
  files:
    - '**/*'
  base-directory: 'dist'
cache:
  paths:
    - 'node_modules/**/*'
```

3. **Create Pipeline via Console**:
   - CodePipeline → Create pipeline
   - Pipeline name: `zetos-hero-app-pipeline`
   - Source: GitHub v2
   - Build: AWS CodeBuild
   - Deploy: AWS Amplify

### Step 2: Add Testing Stage

1. **Update `package.json`** for testing:
```json
{
  "scripts": {
    "test:ci": "jest --ci --coverage --maxWorkers=2",
    "lint:ci": "eslint . --ext .js,.jsx,.ts,.tsx --max-warnings 0"
  }
}
```

2. **Add Test Stage to Pipeline**:
   - Edit pipeline → Add stage after Source
   - Stage name: "Test"
   - Add CodeBuild action for tests

## Phase 5: User Behavior Tracking

### Step 1: Implement Google Analytics 4

1. **Add GA4 to Your App**:
Create `src/utils/analytics.ts`:
```typescript
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-XXXXXXXXXX'); // Your GA4 Measurement ID
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
```

2. **Update `App.tsx`**:
```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, logPageView } from './utils/analytics';

function App() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location]);

  // ... rest of your app
}
```

### Step 2: Set Up AWS Pinpoint

1. **Create Pinpoint Project**:
```bash
aws pinpoint create-app --create-application-request Name=zetos-hero-app
```

2. **Integrate Pinpoint SDK**:
```bash
npm install aws-sdk @aws-amplify/analytics
```

3. **Configure Pinpoint**:
```typescript
import { Analytics } from '@aws-amplify/analytics';

Analytics.configure({
  AWSPinpoint: {
    appId: 'YOUR_PINPOINT_APP_ID',
    region: 'us-east-1'
  }
});

// Track events
Analytics.record({
  name: 'companyCardClick',
  attributes: {
    company: 'CHINTEC',
    category: 'IT Network'
  }
});
```

### Step 3: Create Data Pipeline

1. **Set Up Kinesis Data Firehose**:
```bash
aws firehose create-delivery-stream \
    --delivery-stream-name zetos-hero-analytics \
    --s3-destination-configuration \
    RoleARN=arn:aws:iam::YOUR_ACCOUNT:role/firehose_delivery_role,\
    BucketARN=arn:aws:s3:::zetos-hero-analytics-data,\
    Prefix=raw-data/,\
    ErrorOutputPrefix=error-data/
```

2. **Configure Data Lake**:
```bash
# Create S3 bucket for analytics
aws s3 mb s3://zetos-hero-analytics-data

# Set up lifecycle policy
aws s3api put-bucket-lifecycle-configuration \
    --bucket zetos-hero-analytics-data \
    --lifecycle-configuration file://lifecycle.json
```

## Phase 6: Marketing Tools Setup

### Step 1: A/B Testing with CloudWatch Evidently

1. **Create Evidently Project**:
```bash
aws evidently create-project \
    --name zetos-hero-ab-tests \
    --description "A/B testing for ZETOS Hero App"
```

2. **Implement Feature Flags**:
```typescript
import { EvidentlyClient } from "@aws-sdk/client-evidently";

const evidently = new EvidentiallyClient({ region: "us-east-1" });

export const getFeatureValue = async (feature: string) => {
  const response = await evidently.evaluateFeature({
    project: "zetos-hero-ab-tests",
    feature: feature,
    entityId: getUserId() // Implement user identification
  });
  return response.variation;
};

// Usage
const showNewCTA = await getFeatureValue("new-cta-button");
```

### Step 2: Email Campaign Setup

1. **Configure SES for Transactional Emails**:
```bash
# Verify domain
aws ses verify-domain-identity --domain adamchins.com

# Create email template
aws ses create-template --template file://email-template.json
```

2. **Create Contact Form Handler**:
```typescript
// Lambda function for contact form
exports.handler = async (event) => {
  const { email, message } = JSON.parse(event.body);
  
  const params = {
    Destination: { ToAddresses: ["adam@zetos.fr"] },
    Message: {
      Body: { Text: { Data: message } },
      Subject: { Data: "New Contact from Website" }
    },
    Source: "noreply@adamchins.com"
  };
  
  await ses.sendEmail(params).promise();
  return { statusCode: 200, body: "Email sent" };
};
```

## Phase 7: DevOps Best Practices

### Infrastructure as Code

1. **Create CDK App**:
```bash
mkdir zetos-hero-infrastructure
cd zetos-hero-infrastructure
npx cdk init app --language typescript
```

2. **Define Infrastructure**:
```typescript
import * as cdk from 'aws-cdk-lib';
import * as amplify from 'aws-cdk-lib/aws-amplify';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';

export class ZetosHeroStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new amplify.CfnApp(this, 'ZetosHeroApp', {
      name: 'zetos-hero-app',
      repository: 'https://github.com/YOUR_USERNAME/zetos_hero_app',
      accessToken: process.env.GITHUB_TOKEN,
      buildSpec: `version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'`
    });

    // Add CloudWatch dashboard
    const dashboard = new cloudwatch.Dashboard(this, 'ZetosHeroDashboard', {
      dashboardName: 'zetos-hero-metrics'
    });
  }
}
```

3. **Deploy Infrastructure**:
```bash
npm run build
cdk deploy
```

## Cost Optimization

### 1. Set Up Budget Alerts

```bash
aws budgets create-budget \
    --account-id YOUR_ACCOUNT_ID \
    --budget file://budget.json \
    --notifications-with-subscribers file://notifications.json
```

`budget.json`:
```json
{
  "BudgetName": "ZetosHeroAppBudget",
  "BudgetLimit": {
    "Amount": "20",
    "Unit": "USD"
  },
  "TimeUnit": "MONTHLY",
  "BudgetType": "COST"
}
```

### 2. Implement Caching Strategy

1. **CloudFront Caching Rules**:
```json
{
  "CacheBehaviors": [{
    "PathPattern": "*.js",
    "TTL": 31536000,
    "Compress": true
  }, {
    "PathPattern": "*.css",
    "TTL": 31536000,
    "Compress": true
  }, {
    "PathPattern": "*.jpg",
    "TTL": 86400,
    "Compress": true
  }]
}
```

### 3. Monitor Costs

```bash
# Get monthly cost
aws ce get-cost-and-usage \
    --time-period Start=2025-05-01,End=2025-05-31 \
    --granularity MONTHLY \
    --metrics "UnblendedCost" \
    --group-by Type=DIMENSION,Key=SERVICE
```

## Monitoring Commands

### Check Application Status
```bash
# Amplify app status
aws amplify get-app --app-id YOUR_APP_ID

# CloudWatch metrics
aws cloudwatch get-metric-statistics \
    --namespace AWS/RUM \
    --metric-name PageLoad \
    --start-time 2025-05-31T00:00:00Z \
    --end-time 2025-05-31T23:59:59Z \
    --period 3600 \
    --statistics Average
```

### View Logs
```bash
# Amplify build logs
aws amplify get-job --app-id YOUR_APP_ID --branch-name main --job-id JOB_ID

# CloudWatch logs
aws logs tail /aws/amplify/YOUR_APP_ID --follow
```

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Node version in build settings
   - Verify all dependencies are in package.json
   - Check build logs for specific errors

2. **Domain Not Working**:
   - Verify DNS propagation (can take 24-48 hours)
   - Check SSL certificate status
   - Ensure nameservers are correctly set

3. **High Costs**:
   - Review CloudFront cache hit ratio
   - Check for unnecessary large assets
   - Monitor bandwidth usage

### Debug Commands
```bash
# Check DNS records
dig www.adamchins.com

# Test SSL certificate
openssl s_client -connect www.adamchins.com:443

# Check CloudFront distribution
aws cloudfront get-distribution --id YOUR_DISTRIBUTION_ID
```

## Next Steps

1. **Week 1-2**: Complete basic deployment and domain setup
2. **Week 3-4**: Implement analytics and monitoring
3. **Week 5-6**: Set up advanced CI/CD pipeline
4. **Week 7-8**: Add marketing tools and A/B testing
5. **Ongoing**: Monitor, optimize, and iterate

## Support Resources

- **AWS Amplify Documentation**: https://docs.amplify.aws/
- **AWS Support**: Create support ticket in AWS Console
- **Community**: AWS Amplify Discord/Forums
- **Training**: AWS Skill Builder for DevOps

---

**Document Version:** 1.0  
**Last Updated:** May 31, 2025  
**Author:** AI Lab for ZETOS Hero App

**Remember**: Always test in a staging environment before applying changes to production!