export const TOPICS = ['Arrays', 'Strings', 'Sliding Window', 'Two Pointers', 'Binary Search', 'Hashing', 'Stack', 'Queue', 'Linked List', 'Trees', 'Graphs', 'Greedy', 'Dynamic Programming', 'Recursion', 'Backtracking'];
export const LANGUAGES = ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'Other'];

export function serialize(problem) { return { ...problem, _id: problem._id?.toString(), createdAt: problem.createdAt?.toISOString(), updatedAt: problem.updatedAt?.toISOString(), dateSolved: problem.dateSolved?.toISOString(), lastRevisedAt: problem.lastRevisedAt?.toISOString() }; }
export function cleanProblem(input) {
  const text = value => typeof value === 'string' ? value.trim() : '';
  const topics = Array.isArray(input.topics) ? [...new Set(input.topics.map(text).filter(Boolean))] : [];
  return {
    name: text(input.name), leetcodeUrl: text(input.leetcodeUrl), difficulty: ['Easy', 'Medium', 'Hard'].includes(input.difficulty) ? input.difficulty : '',
    topics, language: text(input.language) || 'JavaScript', solutionCode: String(input.solutionCode || ''), approach: String(input.approach || ''), algorithm: String(input.algorithm || ''),
    timeComplexity: text(input.timeComplexity), spaceComplexity: text(input.spaceComplexity), takeaways: String(input.takeaways || ''), notes: String(input.notes || ''),
    dateSolved: input.dateSolved ? new Date(input.dateSolved) : new Date(), revision: Boolean(input.revision),
    assessment: ['Solved independently', 'Needed hints', 'Need to relearn'].includes(input.assessment) ? input.assessment : '',
  };
}
export function validateProblem(problem) { if (!problem.name || !problem.leetcodeUrl || !problem.difficulty || !problem.topics.length) return 'Name, LeetCode URL, difficulty, and at least one topic are required.'; try { new URL(problem.leetcodeUrl); } catch { return 'Please enter a valid LeetCode URL.'; } return null; }
