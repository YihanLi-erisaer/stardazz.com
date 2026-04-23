# smeeting Privacy Policy

**Last updated:** April 23, 2026

**StarDazz** (“we”, “us”) publishes the **smeeting** Android application (“App”). This Privacy Policy explains how the App handles sensitive data on your device. It reflects the behavior described in the [public README](https://github.com/YihanLi-erisaer/smeeting/blob/master/README.md) of the open-source project and is intended to support transparency under Google Play **User data** expectations.

---

## 1. Audience (including children)

The App is **not directed to children under 13** as its primary audience. If you are under 13, **do not use** smeeting unless a parent or legal guardian installs it, supervises its use, and accepts this Policy on your behalf.

If you believe a child has used the App in a way that raises concerns, contact us (Section 11). We do not knowingly collect personal information from children for marketing purposes.

---

## 2. Summary of practices (from the product design)

- **Streaming speech recognition (ASR):** Microphone audio is processed **entirely on the device** through native pipelines (Sherpa-NCNN / ncnn). The project documentation states there is **no cloud ASR** for streaming recognition.
- **Transcripts and history:** Meeting text and related entries are stored **locally** (e.g., Room / local history as described in the repository architecture).
- **Optional summarization:** You may **download** a quantized **Qwen3** ncnn weight bundle over HTTPS; after download, summarization runs **on-device** against transcripts you already have.
- **Network:** Network access is used when **you initiate** downloads of optional model assets (see download hosts referenced in the README, such as the ncnn model zoo mirror). Streaming ASR itself does not send your microphone audio to StarDazz-operated servers for recognition.

---

## 3. Categories of information processed

| Category | What happens |
|----------|----------------|
| **Audio** | Short windows of microphone input for live ASR; processed on-device. |
| **Text / transcripts** | Text produced or saved in the App; stored locally unless you export or share it yourself. |
| **Optional model files** | Large bundles you download for optional LLM summarization; stored in app-internal storage paths documented in the source tree. |
| **Device & OS data** | Android may collect diagnostics independently of the App; refer to your device manufacturer and Google accounts settings. |

We **do not sell** your personal information.

---

## 4. Android permissions

The App may request permissions including:

- **`RECORD_AUDIO`** — needed to capture audio for on-device ASR.
- **`INTERNET`** — used so you can **download** optional model bundles as documented in the repository (inference remains on-device).

The exact list shown at runtime depends on your build and Android version; always review system permission dialogs.

---

## 5. Storage, retention, and deletion

Data stays on your device under storage patterns described in the open-source project (including internal directories for optional Qwen3 assets). You can delete content where the App provides controls. **Uninstalling** the App removes application sandbox data according to Android rules.

---

## 6. Third parties and open-source software

smeeting relies on **open-source** native components (e.g., Sherpa-NCNN, ncnn, optional Qwen3 ncnn bundles). When you download models, your device contacts third-party **HTTPS endpoints** listed in project documentation; those operators receive typical server logs (such as IP address and request time) like any file download.

Source code is hosted on **GitHub** under the **Apache License 2.0**; use of GitHub is subject to GitHub’s policies.

---

## 7. Security

We align product messaging with **on-device** processing for microphone data, ASR, and optional LLM inference, as stated in the README. No method of storage or processing is perfectly secure—keep your OS updated and protect physical access to your device.

---

## 8. International users

If you use the App outside the country where we operate, processing still occurs on your device as described. Download traffic may be routed globally by your network provider.

---

## 9. Changes

We may update this Policy when features or legal requirements change. We will adjust the **Last updated** date and, when appropriate, note significant changes on this site or in the GitHub repository.

---

## 10. Regulatory context

Please review Google Play’s **User data** and **Families** policies. This Policy summarizes how the published smeeting documentation describes microphone audio, transcripts, optional downloads, and local storage.

---

## 11. Contact

- **Email:** [stardazz@163.com](mailto:stardazz@163.com)  
- **Source & issues:** [github.com/YihanLi-erisaer/smeeting](https://github.com/YihanLi-erisaer/smeeting)

---

*This page is a convenience copy. If any wording conflicts with a specific app build, follow in-app disclosures and the matching source revision on GitHub.*
