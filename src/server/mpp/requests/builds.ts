import {env} from '~/env.mjs'

import {mppApiDefaultHeaders} from '../utils'

export async function getBuild(buildUid: string) {
  return await fetch(`${env.BACKEND_ENDPOINT_URL}/builds/${buildUid}`, {
    headers: mppApiDefaultHeaders,
  })
}

export async function getUserBuilds(userId: string) {
  return await fetch(`${env.BACKEND_ENDPOINT_URL}/users/${userId}/builds`, {
    headers: mppApiDefaultHeaders,
  })
}
