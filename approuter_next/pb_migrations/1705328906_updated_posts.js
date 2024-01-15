/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("19w58npjvf21lep")

  collection.listRule = "created > \"2022-01-01 00:00:00\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("19w58npjvf21lep")

  collection.listRule = null

  return dao.saveCollection(collection)
})
