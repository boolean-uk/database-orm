const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const COMMON_FIELDS = ['id', 'createdAt', 'updatedAt'];

const getModelNames = () => {
  return Object.keys(prisma._dmmf.modelMap);
};

const generateSortedFields = (fields) => {
  return [...COMMON_FIELDS, ...fields].sort();
};

const getModelFields = (modelName) => {
  return prisma._dmmf.modelMap[modelName].fields;
};

const getModelSortedFields = (modelName) => {
  const fields = getModelFields(modelName);
  return fields.map(f => f.name).sort();
};

const generateFieldStructure = (
  type,
  isId,
  isRequired,
  defaultValue = undefined,
  relationFromFields = undefined,
  relationToFields = undefined,
  isList = false, // is `true` for x-to-many relations
) => ({
  type,
  isId,
  isRequired,
  defaultValue,
  relationFromFields,
  relationToFields,
  isList,
});

const generateCommonFieldStructures = () => ({
  id: generateFieldStructure('Int', true, true, { name: 'autoincrement', args: [] }),
  createdAt: generateFieldStructure('DateTime', false, true, { name: 'now', args: []}),
  updatedAt: generateFieldStructure('DateTime', false, true),
});

const getModelFieldsStructure = (modelName) => {
  const fields = getModelFields(modelName);
  const res = {};

  fields.map(field => {
    const { name, type, isId, isRequired, default: defaultValue, relationFromFields, relationToFields, isList } = field;
    res[name] = {
      type,
      isId,
      isRequired,
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
