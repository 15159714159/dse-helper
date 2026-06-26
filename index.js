const extensionName = "dse-helper";

const LEARNING_SUFFIX = `

---
[系统附加指令：请在本次回复最末尾，完整添加以下区块，不得省略]

<details>
<summary>📚 英文版本 & 词汇</summary>

**✍️ English Version:**
[将上方正文翻译成流畅自然的英语]

**📖 Key Vocabulary（5-8个）:**
| Word | Part of Speech | Meaning | Example |
|------|----------------|---------|---------|
[从回复中选取重要单词填入]

</details>`;

jQuery(async () => {
    console.log(\`[\${extensionName}] DSE Helper loaded ✓\`);
    eventSource.on(event_types.CHAT_COMPLETION_SETTINGS_READY, (data) => {
        if (!data?.messages) return;
        const sys = data.messages.find(m => m.role === 'system');
        if (sys) sys.content += LEARNING_SUFFIX;
    });
});
