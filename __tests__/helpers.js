const { Prisma } = require('@prisma/client');

const COMMON_FIELDS = ['id', 'createdAt', 'updatedAt'];

const getModelNames = () => {
  return Prisma.dmmf.datamodel.models.map(model => model.name);
};

const generateSortedFields = (fields) => {
  return [...COMMON_FIELDS, ...fields].sort();
};

const getModelFields = (modelName) => {
  return Prisma.dmmf.datamodel.models.filter(model => model.name === modelName)[0].fields;
};

const getModelSortedFields = (modelName) => {
  const fields = getModelFields(modelName);
  return fields.map(f => f.name).sort();
};

const generateFieldStructure = (
  type,
  isId,
  isRequired,
  isUnique = false, // is `true` for the ___Id field of 1-to-1 relations
  defaultValue = undefined,
  relationFromFields = undefined,
  relationToFields = undefined,
  isList = false, // is `true` for x-to-many relations
) => ({
  type,
  isId,
  isRequired,
  isUnique,
  defaultValue,
  relationFromFields,
  relationToFields,
  isList,
});

const generateCommonFieldStructures = () => ({
  id: generateFieldStructure('Int', true, true, false, { name: 'autoincrement', args: [] }),
  createdAt: generateFieldStructure('DateTime', false, true, false, { name: 'now', args: []}),
  updatedAt: generateFieldStructure('DateTime', false, true),
});

const getModelFieldsStructure = (modelName) => {
  const fields = getModelFields(modelName);
  const res = {};

  fields.map(field => {
    const { name, type, isId, isRequired, isUnique, default: defaultValue, relationFromFields, relationToFields, isList } = field;
    res[name] = {
      type,
      isId,
      isRequired,
      isUnique,
      defaultValue,
      relationFromFields,
      relationToFields,
      isList,
    };
  });

  return res;
};

module.exports = {
  generateCommonFieldStructures,
  generateFieldStructure,
  generateSortedFields,
  getModelFields,
  getModelFieldsStructure,
  getModelNames,
  getModelSortedFields,
}
