import { Octokit } from '@octokit/core'
import { listOrganizationMembersResponse } from '@models/OctokitResponseModel'

export function useGithubService() {
  const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN })

  async function getOrganizationMembers(): Promise<listOrganizationMembersResponse['data']> {
    const response = await octokit.request('GET /orgs/{org}/members', {
      org: 'Super-Sympa-2024', headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    return response.data
  }

  async function getNumberOfCommitsByUser(username: string): Promise<number> {
    let totalCommits = 0

    const reposResponse = await octokit.request('GET /orgs/{org}/repos', {
      org: 'Super-Sympa-2024', headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    const repos = reposResponse.data

    for (const repo of repos) {
      const commitsResponse = await octokit.request('GET /repos/{owner}/{repo}/commits', {
        owner: repo.owner.login, repo: repo.name, author: username, headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      totalCommits += commitsResponse.data.length
    }

    return totalCommits
  }

  return {
    getOrganizationMembers, getNumberOfCommitsByUser
  }
}
