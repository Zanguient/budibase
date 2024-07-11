import { context } from "@budibase/backend-core"

import { generateRowActionsID } from "../../db/utils"
import { TableRowActions } from "@budibase/types"

export async function create(tableId: string, rowAction: { name: string }) {
  const db = context.getAppDB()
  const rowActionsId = generateRowActionsID(tableId)
  let doc: TableRowActions
  try {
    doc = await db.get<TableRowActions>(rowActionsId)
  } catch (e: any) {
    if (e.status !== 404) {
      throw e
    }

    doc = { _id: rowActionsId, actions: [] }
  }

  doc.actions.push(rowAction)
  await db.put(doc)

  return await get(tableId)
}

export async function get(tableId: string) {
  const db = context.getAppDB()
  const rowActionsId = generateRowActionsID(tableId)
  return await db.get<TableRowActions>(rowActionsId)
}
