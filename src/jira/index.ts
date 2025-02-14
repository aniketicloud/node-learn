import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const JIRA_EMAIL = process.env.JIRA_EMAIL;
const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;
const JIRA_DOMAIN = process.env.JIRA_DOMAIN;

export async function fetchJiraProjects() {
  const url = `https://${JIRA_DOMAIN}/rest/api/3/project/search`;

  const authHeader = Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString(
    "base64"
  );

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Basic ${authHeader}`,
        Accept: "application/json",
      },
    });
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error:", err);
  }
}
