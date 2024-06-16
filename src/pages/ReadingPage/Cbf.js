const contentData = [
  {
    id: 1,
    text: "fun fact of recycling the eWaste",
    title: "Did Do You Know?",
    description:
      "Almost 100% of e-waste can be recycled, including components made from non-renewable materials, minimizing waste and maximizing resource efficiency.",
    tags: ["eWaste", "recycling"],
  },
  {
    id: 2,
    text: "giving the awareness of eWaste collection day",
    title: "Did Do You Know?",
    description:
      "The Department of Environment designates the last Saturday of each month as eWaste Collection Day, facilitating proper disposal and recycling of  e-waste.",
    tags: ["eWaste", "awareness"],
  },
  {
    id: 3,
    text: "pollution causes by metals waste",
    title: "Did Do You Know?",
    description:
      "Without proper management, metals such as silver, zinc, aluminum, and mercury can contaminate soil, posing risks to environmental health and ecosystems.",
    tags: ["metal", "awareness"],
  },
  {
    id: 4,
    text: "rare earth metals growth rate",
    title: "Did Do You Know?",
    description:
      "The global compound annual growth rate for rare earth metals is expected to surge by 79% by 2030, driven by the increasing volume of e-waste.",
    tags: ["metal", "awareness"],
  },
  {
    id: 5,
    text: "effects of neglect recycling metals",
    title: "Did Do You Know?",
    description:
      "Cadmium in batteries can damage brain-learning disorders due to its toxic effects on neural development, potentially impairing cognitive function.",
    tags: ["metal", "awareness", "health"],
  },
  {
    id: 6,
    text: "effects of improper plastics recycling",
    title: "Did Do You Know?",
    description:
      "Improperly recycling PVC plastics, which contain chlorine, can lead to tissue damage and cell destruction due to their toxic properties.",
    tags: ["plastics", "awareness", "recycling"],
  },
  {
    id: 7,
    text: "benefits recycling eWaste to get metals",
    title: "Did Do You Know?",
    description:
      "The study found that as early as 2030, raw materials such as copper, gold and aluminum will run out if there are no measures to recycle e-waste",
    tags: ["ewaste", "awareness", "metal"],
  },
  {
    id: 8,
    text: "eWaste should be recycled to avoid pollution",
    title: "Did Do You Know?",
    description:
      "E-waste needs to be recycled because it is hazardous to health, contains precious metals, preserves natural resources and affects soil quality",
    tags: ["ewaste", "awareness", "pollution"],
  },
  {
    id: 9,
    text: "awareness of the recycling practices",
    title: "Did Do You Know?",
    description:
      "Practicing the 3Rs can unite neighbors in recycling efforts, pooling resources for income generation through shared initiatives and waste reduction.",
    tags: ["recycling", "awareness", "income"],
  },
  {
    id: 10,
    text: "separating waste properly to recycling",
    title: "Did Do You Know?",
    description:
      "Segregate e-waste, household waste, and recyclable materials from general domestic waste to prevent environmental pollution.",
    tags: ["recycling", "awareness", "environment"],
  },
  {
    id: 11,
    text: "awareness to download eWaste recycling app",
    title: "Did Do You Know?",
    description:
      "Download the MyWaste app from the Google Play Store or Apple Appstore to access online recycling services provided by the Department of Environment.",
    tags: ["ewaste", "awareness", "recycling"],
  },
  {
    id: 12,
    text: "awareness of benefits recycling waste.",
    title: "Did Do You Know?",
    description:
      "For each metric ton of recycled material, you reduce the carbon footprint by 1.44 metric tons, making recycling a huge contributor to environmental sustainability.",
    tags: ["recycling", "awareness", "environment"],
  },
  {
    id: 13,
    text: "amount of energy can provided by recycling plastics",
    title: "Did Do You Know?",
    description:
      "Each recycled plastic bottle can provide enough energy to power a laptop for 25 hours, showcasing the significant energy-saving potential of plastic recycling.",
    tags: ["plastics", "awareness", "recycling"],
  },
  {
    id: 14,
    text: "reduce fossil fuel cosumption by recycling plastics",
    title: "Did Do You Know?",
    description:
      "Recycling one ton of plastic conserves 1000 to 2000 gallons of gasoline, highlighting its impact on reducing fossil fuel consumption and greenhouse gas emissions.",
    tags: ["plastics", "awareness", "environment"],
  },
  {
    id: 15,
    text: "resources can be saved due to recycling plastics",
    title: "Did Do You Know?",
    description:
      "Every ton of recycled PET bottles saves 3.8 barrels of oil, underscoring the resource-saving benefits of plastic recycling.",
    tags: ["plastics", "awareness", "energy"],
  },
  {
    id: 16,
    text: "greenhouse emission reduction by recycling plastics",
    title: "Did Do You Know?",
    description:
      "Plastic recycling decreases greenhouse gas emissions by 2.5 times, demonstrating its contribution to mitigating climate change and environmental protection.",
    tags: ["plastics", "awareness", "recycling"],
  },
  {
    id: 17,
    text: "benefits of recycling the plastics waste",
    title: "Did Do You Know?",
    description:
      "Recycling a single plastic bottle saves enough energy to illuminate a 60-watt bulb for up to 6 hours, emphasizing its energy-saving potential.",
    tags: ["plastics", "energy", "recycling"],
  },
  {
    id: 18,
    text: "fun fact of recycling papers and its awareness",
    title: "Did Do You Know?",
    description:
      "Each ton of recycled paper in Malaysia conserves 17 trees, demonstrating the importance of paper recycling in preserving the country's forests and biodiversity.",
    tags: ["paper", "awareness", "recycling"],
  },
  {
    id: 19,
    text: "water usage reduction by recycling papers",
    title: "Did Do You Know?",
    description:
      "Paper recycling in Malaysia reduces water usage by 50%, contributing to sustainable water management and conservation efforts.",
    tags: ["paper", "awareness", "recycling"],
  },
  {
    id: 20,
    text: "greenhouse emission reduction by recycling papers",
    title: "Did Do You Know?",
    description:
      "Recycling paper in Malaysia decreases greenhouse gas emissions by 73%, playing a crucial role in reducing air pollution and combating climate change",
    tags: ["paper", "awareness", "environment"],
  },
];

// Function to preprocess text by removing special characters and converting to lowercase
function preprocessText(text) {
  return text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, "").split(/\s+/);
}

// Function to calculate term frequency (TF)
function calculateTF(terms, term) {
  const termCount = terms.filter((t) => t === term).length;
  return termCount / terms.length;
}

// Function to calculate inverse document frequency (IDF)
function calculateIDF(corpus, term) {
  const numDocumentsWithTerm = corpus.filter((terms) => terms.includes(term)).length;
  return 1 + Math.log((corpus.length + 1) / (numDocumentsWithTerm + 1));
}

// Function to calculate TF-IDF vectors for a corpus of texts
function calculateTfIdf(corpus) {
  const vocabulary = new Set(corpus.flat());
  const idfScores = {};

  vocabulary.forEach((term) => {
      idfScores[term] = calculateIDF(corpus, term);
  });

  const tfIdfVectors = corpus.map((terms, docIndex) => {
      const tfIdfVector = {};
      terms.forEach((term) => {
          if (!tfIdfVector[term]) {
              const tf = calculateTF(terms, term);
              const idf = idfScores[term];
              const tfIdf = tf * idf;
              tfIdfVector[term] = tfIdf;
              console.table([{ Document: docIndex + 1, Term: term, TF: tf, IDF: idf, 'TF-IDF': tfIdf }]);
          }
      });
      return tfIdfVector;
  });

  return tfIdfVectors;
}

// Function to calculate cosine similarity between two vectors
function cosineSimilarity(vectorA, vectorB) {
  const terms = new Set([...Object.keys(vectorA), ...Object.keys(vectorB)]);
  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;

  terms.forEach((term) => {
      const valueA = vectorA[term] || 0;
      const valueB = vectorB[term] || 0;
      dotProduct += valueA * valueB;
      magnitudeA += valueA * valueA;
      magnitudeB += valueB * valueB;
  });

  if (magnitudeA === 0 || magnitudeB === 0) {
      return 0;
  }

  return dotProduct / (Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB));
}

// Recommend content based on user interests using TF-IDF
function recommendContent(userInterests) {
  if (userInterests.length === 0) {
      return [];
  }

  const corpus = contentData.map((item) => preprocessText(item.text));
  const contentVectors = calculateTfIdf(corpus);

  const userInterestText = preprocessText(userInterests.join(" "));
  const userInterestVector = calculateTfIdf([userInterestText])[0];

  const contentWithScores = contentData.map((item, index) => {
      const contentVector = contentVectors[index];
      const score = cosineSimilarity(userInterestVector, contentVector);
      console.table([{ Content: item.text, Score: score }]);
      return {
          ...item,
          score,
      };
  });

  const sortedContent = contentWithScores.sort((a, b) => b.score - a.score);

  console.log("Sorted Content by Score:");
  console.table(sortedContent.map(item => ({ Content: item.text, Score: item.score })));

  return sortedContent;
}

export { recommendContent };
